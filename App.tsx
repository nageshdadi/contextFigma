import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigtionBottom from './src/components/NavigtionBottom';
import Catlog from './src/components/Catlog';
import GlobalContext from './src/components/GlobalContext';
const Stack = createStackNavigator();
export class App extends Component {
  render() {
    return (
      <GlobalContext>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="NavigationBottom" component={NavigtionBottom} />
            <Stack.Screen name="Catlog" component={Catlog} />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalContext>
    );
  }
}

export default App;
