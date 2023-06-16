import React, {Component} from 'react';
import Wedding from './Wedding';
import Decor from './Decor';
import Gif from './Gif';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export class NavigationTop extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarStyle: {
            height: 40,
            marginRight: 10,
            justifyContent: 'center',
            borderRadius: 10,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#9682B6',
            height: 36,
            borderRadius: 10,
            paddingBottom: 5,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#2E2D2D',
            tabBarLabelStyle: {
              fontSize: 13,
            },
          }}
          name="Wedding"
          component={Wedding}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#2E2D2D',
            tabBarLabelStyle: {
              fontSize: 13,
            },
          }}
          name="Decor"
          component={Decor}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#2E2D2D',
            tabBarLabelStyle: {
              fontSize: 13,
            },
          }}
          name="Gif"
          component={Gif}
        />
      </Tab.Navigator>
    );
  }
}

export default NavigationTop;
