import React from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

const firebase = require('firebase');
require('firebase/firestore');

// Chat component
export default class Chat extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      user: {}
    }

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAlYz2pM-b7_nrkq3pGQ9NNmFoAvS6zZ3o",
      authDomain: "chat-app-4d7ee.firebaseapp.com",
      projectId: "chat-app-4d7ee",
      storageBucket: "chat-app-4d7ee.appspot.com",
      messagingSenderId: "458218301168",
      appId: "1:458218301168:web:43ac7800cdcf1da4e4c435"
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // set firestore reference messages
    this.referenceChatMessages = firebase.firestore().collection("messages");
  }

  componentDidMount() {
    // set navigation title = username
    let name = this.props.route.params.username;
    this.props.navigation.setOptions({ title: name });

    // set firestore reference messages
    this.referenceChatMessages = firebase.firestore().collection('messages');

    // authorize firebase
    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        await firebase.auth().signInAnonymously();
      }

      //update user state with currently active user data
      this.setState({
        messages: [],
        user: {
          _id: user.uid,
          name
        }
      });
      this.unsuscribe = this.referenceChatMessages.orderBy('createdAt', 'desc').onSnapshot(this.onCollectionUpdate);
    });

  }

  // unsuscribe 
  componentWillUnmount() {
    if (this.isConnected) {
      this.unsubscribe();
      this.authUnsubscribe();
    }
  }


  // retrieve snapshot of messages when changed
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: {
          _id: data.user._id,
          name: data.user.name,
        },
      });
    });
    this.setState({ messages });
  }

  // add message to firestore
  addMessage = (message) => {
    this.referenceChatMessages.add({
      _id: message[0]._id,
      createdAt: message[0].createdAt,
      text: message[0].text,
      user: {
        _id: this.state.user._id,
        name: this.props.route.params.username
      }
    });
  }

  // send message => append to messages array
  onSend(messages = []) {
    this.addMessage(messages);
    this.setState(
      previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      })
    );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // customize active user bubble color
            backgroundColor: this.props.route.params.color
          }
        }}
      />
    )
  }
  render() {
    return (
      <View style={[styles.container]}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: this.state.user._id
          }}
        />
        {Platform.OS === 'android' && <KeyboardAvoidingView behavior="height" />
        }
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center"
  }
})