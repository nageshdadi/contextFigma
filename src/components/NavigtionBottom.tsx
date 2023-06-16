/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cart from './Cart';
import Context from './Context';
import NavigationNasted from './NavigationNasted';
import Chat from './Chat';
import {Image} from 'react-native';
import CatlogImg from '../images/Catlog.png';
import HouseImg from '../images/house.png';
import ChatImg from '../images/Chat.png';
import CartImg from '../images/Cart.png';
const Tab = createBottomTabNavigator();

class NavigtionBottom extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: '#fff',
                height: 80,
                paddingBottom: 7,
              },
            }}>
            <Tab.Screen
              options={{
                tabBarIcon: ({focused}) => (
                  <Image
                    source={HouseImg}
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 30,
                      tintColor: focused
                        ? '#4B194F'
                        : 'rgba(129, 138, 152, 0.2)',
                    }}
                  />
                ),
                tabBarActiveBackgroundColor: '#fff',
                tabBarInactiveBackgroundColor: '#fff',
                tabBarActiveTintColor: '#4B194F',
                tabBarLabelStyle: {
                  fontSize: 15,
                  fontWeight: '400',
                },
              }}
              name="Home"
              component={Home}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({focused}) => (
                  <Image
                    source={CatlogImg}
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 30,
                      tintColor: focused
                        ? '#4B194F'
                        : 'rgba(129, 138, 152, 0.2)',
                    }}
                  />
                ),
                tabBarActiveBackgroundColor: '#fff',
                tabBarInactiveBackgroundColor: '#fff',
                tabBarActiveTintColor: '#4B194F',
                tabBarLabelStyle: {
                  fontSize: 15,
                  fontWeight: '400',
                },
              }}
              name="Catlog"
              component={NavigationNasted}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({focused}) => (
                  <Image
                    source={ChatImg}
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 30,
                      tintColor: focused
                        ? '#4B194F'
                        : 'rgba(129, 138, 152, 0.2)',
                    }}
                  />
                ),
                tabBarActiveBackgroundColor: '#fff',
                tabBarInactiveBackgroundColor: '#fff',
                tabBarActiveTintColor: '#4B194F',
                tabBarLabelStyle: {
                  fontSize: 15,
                  fontWeight: '400',
                },
              }}
              name="Chat"
              component={Chat}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({focused}) => (
                  <Image
                    source={CartImg}
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 30,
                      tintColor: focused
                        ? '#4B194F'
                        : 'rgba(129, 138, 152, 0.2)',
                    }}
                  />
                ),
                tabBarBadge: `${context.cartData.length}`,
                tabBarActiveBackgroundColor: '#fff',
                tabBarInactiveBackgroundColor: '#fff',
                tabBarActiveTintColor: '#4B194F',
                tabBarLabelStyle: {
                  fontSize: 15,
                  fontWeight: '400',
                },
              }}
              name="Cart"
              component={Cart}
            />
          </Tab.Navigator>
        )}
      </Context.Consumer>
    );
  }
}

export default NavigtionBottom;
