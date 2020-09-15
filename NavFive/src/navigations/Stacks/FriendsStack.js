import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Friends from '../../screens/Friends';

const Stack = createStackNavigator();

function FriendsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Friends"
        component={Friends}
        options={{
          title: 'Friends',
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              {/*Donute Button Image */}
              <Image
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  tintColor: 'green',
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default FriendsStack;
