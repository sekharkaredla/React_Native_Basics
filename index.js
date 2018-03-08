import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import ScrollMain from './src/components/ScrollMain/ScrollMain.js';

class FirstProject extends Component {
	render(){
		return (
			<View>
			<ScrollMain />
			</View>
		);
	}
}
export default FirstProject;

AppRegistry.registerComponent('FirstProject', () => FirstProject);
