import {StyleSheet} from 'react-native';
 export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonsToChangeTimeContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',

  },
  buttonsToChangeTime:{
    paddingHorizontal: 57,
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
    flexDirection: 'row',
    fontSize: 100,
    alignItems: 'center',
    justifyContent: 'center',
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
