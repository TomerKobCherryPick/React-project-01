import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch, Button, Vibration, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './Styles.js';
import {ChangeTimeSwitch} from './ChangeTimeSwitch.js'

export const TimerHandlerButtons = props => (
  <View style={styles.buttonContainer}>
  <Button title='Start' onPress={props.onStartTimerPress} />
  <Button title='Stop' onPress={props.onStopTimerPress} />
  <Button title='Reset' onPress={props.onResetTimerPress}/>
  </View>
);
