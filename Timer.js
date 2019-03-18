import React, {Component} from 'react';
import {Text, View, Vibration} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './Styles.js';
import {ChangeTimeSwitch} from './ChangeTimeSwitch.js'
import {TimerHandlerButtons} from './TimerHandlerButtons.js'
import {ButtonsToChangeTime} from './ButtonsToChangeTime.js'
import {TimerText} from './TimerText.js'

export class Timer extends Component {
  static propTypes = {
    timeLeft: PropTypes.number.isRequired
  }
  state = {
    timeLeft: this.props.timeLeft,
    originalTime: this.props.timeLeft,
    isPaused: true,
    isLongTimer: true,
    isEditable: false
  }
  startTimer(){
    if(this.state.isPaused){
      this.setState(() => ({
        isPaused: false
      }))
      this.timer = setInterval(() => this.decreaseTime(), 1000)
    }
  }
  stopTimer(){
    clearInterval(this.timer)
    this.setState(() => ({
      isPaused: true
    }))
  }
  resetTimer(){
    this.setState((prevState) => ({
      timeLeft: prevState.originalTime,
    }))
  }
  decreaseTime() {
    if (this.state.timeLeft !== 0) {
      this.setState(prevState => ({
        timeLeft: prevState.timeLeft - 1,
      }))
    } else {
      Vibration.vibrate([500, 500, 500])
      clearInterval(this.timer)
    }
  }
  switchTimerTime(){
    let timeToChange = this.state.isLongTimer ? 10 : 1500
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
  getSecondsText() {
    let seconds  =  parseInt(this.state.timeLeft % 60)
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    return seconds + ''
  }
  getMinutesText() {
    let minutes =  parseInt((this.state.timeLeft / 60) % 60)
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    return minutes + ''
  }
  render() {
    return (
      <View style={styles.container}>
      <ChangeTimeSwitch
      isLongTimer = {this.state.isLongTimer}
      onValueChange =
      {() => this.switchTimerTime()}
      />
      <ButtonsToChangeTime symbol={'+'} onPressSeconds={() => this.setState( {
        timeLeft: this.state.timeLeft + 1,
        originalTime: this.state.originalTime + 1
      })}
      onPressMinutes={() =>
        this.setState( {
          timeLeft: this.state.timeLeft + 60,
          originalTime: this.state.originalTime + 60
        })
      }
       />
      <TimerText minutes={() => this.getMinutesText()} seconds={() => this.getSecondsText()} />
      <ButtonsToChangeTime symbol={'-'} onPressSeconds={() => this.setState( {
        timeLeft: this.state.timeLeft - 1,
        originalTime: this.state.originalTime - 1
      })} onPressMinutes={() =>
        this.setState( {
          timeLeft: this.state.timeLeft - 60,
          originalTime: this.state.originalTime - 60
        })
      } />
      <TimerHandlerButtons
      onStartTimerPress={() => this.startTimer()}
      onStopTimerPress={() => this.stopTimer()}
      onResetTimerPress={() => this.resetTimer()}
      />
      </View>
    )
  }
}
