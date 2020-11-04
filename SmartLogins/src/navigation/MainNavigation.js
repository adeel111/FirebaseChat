import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Home screen
import Home from '../screens/Home';

// Login screens
import EmailPassLogin from '../screens/Logins/EmailPassLogin';
import GoogleLogin from '../screens/Logins/GoogleLogin';
import FacebookLogin from '../screens/Logins/FacebookLogin';
import PhoneNoLogin from '../screens/Logins/PhoneNoLogin';
import AppleLogin from '../screens/Logins/AppleLogin';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmailPassLogin"
          component={EmailPassLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GoogleLogin"
          component={GoogleLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FacebookLogin"
          component={FacebookLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhoneNoLogin"
          component={PhoneNoLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppleLogin"
          component={AppleLogin}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
