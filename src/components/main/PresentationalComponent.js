import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PresentationComponent = (props) => {
	return(
		<View style = {styles.container}>
		<Text onPress = {props.updateState} style = {styles.myStyle}>
		{props.text}
		</Text>
		<View style = {styles.whiteBox}/>
		<View style = {styles.greenBox}/>
		</View>
	);
}

const styles = StyleSheet.create ({
   myStyle: {
      marginTop: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20
   },
	 container: {
		 flexDirection: 'row',
		 justifyContent: 'space-between',
		 alignItems: 'center',
		 backgroundColor: 'orange',
		 height: 700
	 },
	 whiteBox: {
		 width: 100,
		 height: 100,
		 backgroundColor: 'white'
	 },
	 greenBox: {
		 width: 150,
		 height: 150,
		 backgroundColor: 'green'
	 }
})
export default PresentationComponent;
