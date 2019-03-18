import React, {Component} from 'react';
import {Text, View, Switch} from 'react-native';
import {styles} from './Styles.js';

export const ChangeTimeSwitch = props => (
  <View style={styles.switchContainer}>
  <Text style={styles.switchItem}>Short</Text>
  <Switch value={props.isLongTimer} onValueChange={props.onValueChange} style={styles.switchItem}/>
  <Text style={styles.switchItem}>Long</Text>
  </View>
);
