import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent';
class Main extends Component {
	constructor(){
      super()
      this.updateState = this.updateState.bind(this)
   	}
	state = {
		text: 'karedla'
	}
	// updateState(){
	// 	this.setState({text: 'updated text'})
	// }
	updateState = () => this.setState({text: 'updated state'})
	render() {
		return (
			<View>
			<PresentationalComponent text = {this.state.text} updateState = {this.state.updateState} />
			</View>
		);
	}

}
export default Main;
