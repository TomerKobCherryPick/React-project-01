
import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch, Button} from 'react-native';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  switchItem: {
    padding: 10
  },
  timer: {
    fontSize: 100,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wholeContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
const MySwitch = props => (
  <View style={styles.switchContainer}>
    <Text style={styles.switchItem}>Short</Text>
    <Switch value={props.isLongTimer} onValueChange={props.onValueChange} style={styles.switchItem}/>
    <Text style={styles.switchItem}>Long</Text>
  </View>
);
const Buttons = props => (
  <View style={styles.buttonContainer}>
    <Button title='Start' onPress={props.onStartTimerPress} />
    <Button title='Stop' onPress={props.onStopTimerPress} />
    <Button title='Reset' onPress={props.onResetTimerPress}/>
  </View>
)

class Timer extends Component {
  static propTypes = {
    timeLeft: PropTypes.number.isRequired
  }
  state = {
    timeLeft: this.props.timeLeft,
    originalTime: this.props.timeLeft,
    isPaused: true,
    isLongTimer: true
  }
  startTimer(){
    if(this.state.isPaused){
      this.setState(prevState => ({
        timeLeft: prevState.timeLeft,
        originalTime: prevState.originalTime,
        isPaused: false
      }))
      this.timer = setInterval(() => this.decreaseTime(), 1000)
      console.log('timer Started')
    }
  }
  stopTimer(){
    clearInterval(this.timer)
    this.setState(prevState => ({
      timeLeft: prevState.timeLeft,
      originalTime: prevState.originalTime,
      isPaused: true
    }))
  }
  resetTimer(){
    this.setState(prevState => ({
      timeLeft: prevState.originalTime,
      originalTime: prevState.originalTime,
      isPaused: prevState.isPaused
    }))
  }
  decreaseTime() {
    if (this.state.timeLeft !== 0) {
      this.setState(prevState => ({
        timeLeft: prevState.timeLeft - 1,
        originalTime: prevState.originalTime,
      }))
    } else {
      clearInterval(this.timer)
    }
  }
  switchTimerTime(){
      let timeToChange = this.state.isLongTimer ? 300 : 1500
      this.setState({
        originalTime: timeToChange,
        timeLeft: timeToChange,
        isLongTimer: !this.state.isLongTimer
      })
  }
  getTimeText() {
    let seconds  =  parseInt(this.state.timeLeft % 60)
    let minutes =  parseInt((this.state.timeLeft / 60) % 60)
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    return  minutes + ':' + seconds
  }
  render() {
    return (
      <View style={styles.container}>
      <MySwitch
        isLongTimer = {this.state.isLongTimer}
        onValueChange =
          {() =>
            this.switchTimerTime()
          }
      />
      <Text style={styles.timer}>
      {this.getTimeText()}
      </Text>
      <Buttons
        onStartTimerPress={() => this.startTimer()}
        onStopTimerPress={() => this.stopTimer()}
        onResetTimerPress={() => this.resetTimer()}
      />
      </View>
    )
  }
}

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
