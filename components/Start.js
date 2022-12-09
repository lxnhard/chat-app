import React from 'react';
import { StyleSheet, View, Text, Platform, KeyboardAvoidingView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const backgroundImage = require('../assets/background_image.png');
// const icon = require('../assets/icon.svg');

// start component
export default class Start extends React.Component {
  // state variables: input string (name) and color
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      color: '#090C08'
    };
  }

  // handler: change color state + navigate to chat
  onPressColor = (color) => {
    this.setState({ color: color });
    // this.props.navigation.navigate('Chat', { username: this.state.input, color: color });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* background image */}
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
          {/* title */}
          <Text style={styles.title}>Chat app</Text>
          {/* all controls */}
          <View style={styles.controls}>
            <View style={styles.inputContainer}>
              {/* Name input */}
              <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ input: text })}
                value={this.state.input}
                placeholder="Your name"
                placeholderTextColor={"rgba(117, 112, 131, 1)"}
              />
            </View>
            {/* Color picker */}
            <View style={styles.colorpickerContainer}>
              <Text style={styles.colorsText}>Choose your color:</Text>
              <View style={styles.colorsContainer}>
                <View style={this.state.color === "#090C08" ? styles.colorActive : styles.colorInactive}><TouchableOpacity style={[styles.color, styles.color1]} onPress={() => this.onPressColor('#090C08')}></TouchableOpacity></View>
                <View style={this.state.color === "#474056" ? styles.colorActive : styles.colorInactive}><TouchableOpacity style={[styles.color, styles.color2]} onPress={() => this.onPressColor('#474056')}></TouchableOpacity></View>
                <View style={this.state.color === "#8A95A5" ? styles.colorActive : styles.colorInactive}><TouchableOpacity style={[styles.color, styles.color3]} onPress={() => this.onPressColor('#8A95A5')}></TouchableOpacity></View>
                <View style={this.state.color === "#B9C6AE" ? styles.colorActive : styles.colorInactive}><TouchableOpacity style={[styles.color, styles.color4]} onPress={() => this.onPressColor('#B9C6AE')}></TouchableOpacity></View>
              </View>
            </View>
            {/* Start Chat button */}
            <TouchableOpacity
              style={styles.button}
              title="Start Chatting"
              color="#757083"
              onPress={() => this.props.navigation.navigate('Chat', { username: this.state.input, color: this.state.color })}
            >
              <Text
                style={styles.buttonText}>Start Chatting</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground >
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View >
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    flex: 1,
    color: "white",
    fontSize: 45,
    fontWeight: '600',
    textAlign: "center",
    textAlignVertical: "center"
  },
  controls: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '88%',
    marginBottom: '6%',
    alignSelf: "center",
    padding: "6%"
  },
  inputContainer: {
    height: 50,
    lineHeight: 50,
    paddingLeft: 15,
    borderColor: '#757083',
    opacity: 0.5,
    borderWidth: 2
  },
  input: {
    backgroundColor: '#ffffff',
    height: 50,
    lineHeight: 50,
    fontSize: 16,
    fontWeight: '300',
    color: '#000',
    paddingTop: 0,
    paddingBottom: 0
  },
  colorpickerContainer: {
    flex: 3,
    marginTop: 10
  },
  colorsText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    marginBottom: 10
  },
  colorsContainer: {
    flexDirection: "row"
  },
  color: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  colorActive: {
    width: 60,
    height: 60,
    borderWidth: 1.5,
    borderColor: "rgba(117, 112, 131, 0.5)",
    marginRight: 15,
    borderRadius: 30,
    justifyContent: "center",
    padding: 3.5
  },
  colorInactive: {
    width: 60,
    height: 60,
    padding: 5,
    marginRight: 15
  },
  color1: {
    backgroundColor: "#090C08"
  },
  color2: {
    backgroundColor: "#474056"
  },
  color3: {
    backgroundColor: "#8A95A5"
  },
  color4: {
    backgroundColor: "#B9C6AE"
  },
  button: {
    flex: 1,
    backgroundColor: "#757083",
    justifyContent: "center",
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: "white",
    textAlign: "center"
  }
});
