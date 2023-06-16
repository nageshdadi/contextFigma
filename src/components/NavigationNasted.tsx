import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemDetsils from './ItemDetsils';
import Catlog from './Catlog';
const Stack = createStackNavigator();
export class NavigationNasted extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="catlogPage" component={Catlog} />
        <Stack.Screen name="ItemDetails" component={ItemDetsils} />
      </Stack.Navigator>
    );
  }
}

export default NavigationNasted;
