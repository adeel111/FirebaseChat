import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Home';
import TopTabs from '../../navigations/Tabs/TopTabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            elevation: 0,
          },
          headerLeft: () => (
            <FontAwesome
              name="bars"
              color={'green'}
              size={22}
              style={{marginLeft: 15}}
              onPress={() => props.navigation.toggleDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={TopTabs}
        options={{
          title: 'Details',
          headerStyle: {
            elevation: 0,
          },
          headerRight: () => (
            <Ionicons
              name="settings"
              color={'green'}
              size={22}
              style={{marginRight: 10}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
