import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {styles} from './Styles.js';

export const ButtonsToChangeTime = props => (
  <View style={styles.buttonsToChangeTimeContainer} >
    <View style={styles.buttonsToChangeTime}>
      <Button title={props.symbol} onPress={props.onPressMinutes} />
    </View>
    <View style={styles.buttonsToChangeTime}>
    <Button title={props.symbol} onPress={props.onPressSeconds} />
    </View>
  </View>
);
