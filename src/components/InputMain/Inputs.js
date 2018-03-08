import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class Inputs extends Component{
  state = {
    email: '',
    password: ''
  }
  handleEmail = (mail) => {
    this.setState({email: mail});
  }
  handlePassword = (pass) => {
    this.setState({password: pass});
  }
  login = () => {
    alert(this.state.email+' '+this.state.password)
  }
  render(){
    return(
      <View style = {styles.container}>
      <TextInput style = {styles.input}
      placeholder = "EMAIL"
      autoCaptialize = "none"
      onChangeText = {this.handleEmail}/>

      <TextInput style = {styles.input}
      placeholder = "PASSWORD"
      autoCaptialize = "none"
      onChangeText = {this.handlePassword}/>

      <TouchableOpacity
      style = {styles.submitButton}
      onPress = {this.login}>
      <Text style = {styles.submitButtonText}>
      SUBMIT
      </Text>
      </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7ad2f4',
    borderWidth: 3
  },
  submitButton: {
      backgroundColor: '#7a4ff4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'red'
   }
})
export default Inputs;
