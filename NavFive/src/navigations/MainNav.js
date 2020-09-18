import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import AuthStack from '../navigations/Stacks/AuthStack';
import DrawerNav from '../navigations/Drawer';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}} // to hide header from all screens
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'Splash Screen', headerShown: false}} // from single screen
        />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Home" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
