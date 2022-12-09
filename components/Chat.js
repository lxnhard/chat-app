import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Chat extends React.Component {

  componentDidMount() {
    let name = this.props.route.params.username;
    this.props.navigation.setOptions({ title: name });
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.props.route.params.color }]}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center"
  },
  text: {
    flex: 1,
    fontSize: 32,
    color: "#fff",
    textAlign: "center"
  }

})