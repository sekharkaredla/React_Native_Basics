import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

class ScrollViewEx extends Component{
  state = {
    data: [
      {
        id:1
      },
      {
        id:2
      },
      {
        id:4

      },
      {
        id:5
      },
      {
        id:6
      },
      {
        id:7
      }
    ]
  }
  createAlert = (data) => {
    alert(data)
  }
  render(){
    return(
    <View>
    <ScrollView>
    {
      this.state.data.map((item,index) => (
      <View key = {item.id} style = {styles.item}>
      <Text onPress = {() => this.createAlert(item.id)}>
      {item.id}
      </Text>
      </View>
      ))
    }
    </ScrollView>
    </View>
  )
  }
}
const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})
export default ScrollViewEx;
