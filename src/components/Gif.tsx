import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export class Gif extends Component {
  render() {
    return (
      <View style={styles.mainCard}>
        <Text style={styles.textMain}>Gif</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMain: {
    fontSize: 30,
    fontWeight: '600',
  },
});
export default Gif;
