import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../../screens/Profile';

const Stack = createStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
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

export default ProfileStack;
