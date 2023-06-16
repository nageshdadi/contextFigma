import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import NavigationTop from './NavigationTop';
import Icon from 'react-native-vector-icons/Feather';
export class Home extends Component {
  render() {
    return (
      <View style={styles.mainCard}>
        <Text style={styles.floristText}>F L O R I S T</Text>
        <View style={styles.welcomeCrad}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Icon name="user" size={33} color="#2E2D2D" />
        </View>
        <NavigationTop />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCard: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
  floristText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 50,
    color: '#2E2D2D',
  },
  welcomeCrad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 30,
    color: '#2E2D2D',
  },
});

export default Home;
