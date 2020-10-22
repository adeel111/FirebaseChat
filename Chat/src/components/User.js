import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

const User = ({name, image, typing}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection: 'row'}}>
      <View style={{alignSelf: 'center'}}>
        <Avatar
          rounded
          source={{
            uri: image ? image : 'https://picsum.photos/200/300',
          }}
        />
      </View>
      <View style={{marginLeft: 2}}>
        <Text
          numberOfLines={1}
          
          style={{marginLeft: 10}}
        ></Text>
        {typing ? (
          <CustomText
            title={'typing...'}
            type={'normal'}
            style={{marginLeft: 10, fontSize: 12}}
          />
        ) : (
          <CustomText
            title={timeFromNow}
            type={'normal'}
            style={{marginLeft: 10, fontSize: 12}}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export {User};

// const HeaderRight = () => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         // alignSelf: 'center',
//         justifyContent: 'space-around',
//         width: '100%',
//       }}>
//       <Icon
//         onPress={() => {
//           alert('Audio Call');
//         }}
//         name={'call'}
//         type={'zocial'}
//       />
//       <Icon
//         onPress={() => {
//           alert('Video Call');
//         }}
//         name={'video-camera'}
//         type={'font-awesome'}
//       />
//     </View>
//   );
// };
