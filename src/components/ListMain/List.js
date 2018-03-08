import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class List extends Component{
  state= {
    data: [
      {
        roll: 91,
        name: 'sekhar'
      },
      {
        roll: 92,
        name: 'dasarad'
      },
      {
        roll: 93,
        name: 'chu**ya'
      }
    ]
  }
createAlert = (item) => {
  alert(item.name)
}
render(){
  return(
    <View>
    {
    this.state.data.map((item,index) => (
    <TouchableOpacity key = {item.roll} style = {styles.container} onPress = {() => this.createAlert(item)}>
    <Text style = {styles.text}>
    {index+' '+item.roll+' '+item.name}
    </Text>
    </TouchableOpacity>
    ))
  }
    </View>
  )
}
}
const styles = StyleSheet.create(
  {
    container: {
      padding: 10,
      backgroundColor: 'green',
      marginTop: 10,
      alignItems: 'center'
    },
    text: {
      color: 'black'
    }
  }
)
export default List;
