
import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from './Styles.js';
import {Timer} from './Timer.js'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isLongTimer: true
    };
  }
  render() {
    return (
      <View style={styles.wholeContainer}>
      <Timer timeLeft={this.state.isLongTimer ? 1500 : 300} />
      </View>
    );
  }
}
