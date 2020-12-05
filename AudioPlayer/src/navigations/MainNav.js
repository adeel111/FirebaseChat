import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import AudioFiles from '../screens/AudioFiles';
import AudioPlay from '../screens/AudioPlay';
import VideoFiles from '../screens/VideoFiles';
import VideoPlay from '../screens/VideoPlay';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AudioFiles" component={AudioFiles} />
        <Stack.Screen name="AudioPlay" component={AudioPlay} />
        <Stack.Screen name="VideoFiles" component={VideoFiles} />
        <Stack.Screen name="VideoPlay" component={VideoPlay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
