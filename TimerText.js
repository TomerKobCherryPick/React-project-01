import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './Styles.js';
export const TimerText = props => (
  <View style={styles.timer} >
    <Text style={styles.timer}>
    {props.minutes() + ':' + props.seconds()}
    </Text>
  </View>
);
