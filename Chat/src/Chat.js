import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Platform,
  TextInput,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Pusher from 'pusher-js/react-native';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {Icon, Avatar, Header} from 'react-native-elements';

const Chat = () => {
  const [message, setMessage] = useState([]);
  const [allMessages, setAllMessages] = useState('');
  const [height, setHeight] = useState(20);
  const [msg, setMsg] = useState('Coming Message');

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    // Initialization & Configuration
    const pusher = new Pusher('27a94913194564d488b6', {
      cluster: 'mt1',
      authEndpoint:
        'http://techndevs.us/clients/projects/CustomChat/public/api/authtest',
    });

    // Making Connection
    pusher.connection.bind('connected', function (data) {
      console.log(data.socket_id);
    });

    // Subscribe Channel
    var channel = pusher.subscribe('private-chatify', (data) => {
      console.log('Subscribe Channel');
      console.log(data);
    });

    // Accessing Channels
    const channelInfo = pusher.channel('private-chatify');
    console.log('channel Info');
    console.log(channelInfo);

    // Listen for Event
    channel.bind('messaging', function (data) {
      console.log('An event was triggered with message');
      console.log(data);
      console.log(data.message_original);

      setMsg(data?.message_original?.message);
    });

    getAllMessages();

    // pusher.disconnect();
  }, []);

  const getAllMessages = () => {
    var axios = require('axios');
    var data = JSON.stringify({from_id: 3, id: 1});

    var config = {
      method: 'post',
      url: 'http://techndevs.us/clients/projects/CustomChat/public/api/fetch',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        const data = JSON.stringify(response.data);
        console.log('response.data.messages');
        console.log(response.data.messages);
        console.log(response.data.messages[index].id);
        setAllMessages(response.data.messages);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSend = () => {
    alert('Message Send');
    setMessage('');
    return;
    var axios = require('axios');
    var data = JSON.stringify({
      id: 1,
      from_id: 3,
      type: 'user',
      message: message,
      temporaryMsgId: 'temp_1',
    });

    var config = {
      method: 'post',
      url: 'http://techndevs.us/clients/projects/CustomChat/public/api/send',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateSize = (height) => {
    setHeight(height);
  };

  const renderComposer = () => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Type a message...'}
          value={message}
          ellipsizeMode="tail"
          multiline
          maxHeight={Platform.OS === 'android' ? 80 : 75}
          onChangeText={(text) => setMessage(text)}
          placeholderTextColor={'gray'}
          style={styles.inputStyles}
          onContentSizeChange={(e) =>
            updateSize(e.nativeEvent.contentSize.height)
          }
        />
        <TouchableOpacity
          style={[styles.sendButton, {opacity: message === '' ? 0.3 : 1}]}
          // onPress={() => onSend()}
          disabled={message === '' ? true : false}>
          <Icon
            name={'send-circle'}
            type={'material-community'}
            size={38}
            color={'green'}
            containerStyle={styles.sendIconContainer}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {/* <StatusBar hidden /> */}
      <SafeAreaView style={styles.mainContainer}>
        <Header
          leftComponent={
            <Icon name={'left'} type={'antdesign'} color={'gray'} size={24} />
          }
          leftContainerStyle={styles.headerLeftContainer}
          centerComponent={
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <View style={{alignSelf: 'center'}}>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://picsum.photos/200/300',
                  }}
                />
              </View>
              <View style={{marginLeft: 2}}>
                <Text numberOfLines={1} style={{marginLeft: 10}}>
                  Adeel Iftikhar
                </Text>
                <Text numberOfLines={1} style={{marginLeft: 10}}>
                  typing...
                </Text>
              </View>
            </TouchableOpacity>
          }
          placement={'left'}
          containerStyle={styles.headerContainer}
          rightContainerStyle={styles.headerRightContainer}
        />
        {/* <GiftedChat
          messages={allMessages && allMessages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: allMessages[0].id,
          }}
          renderComposer={() => renderComposer()}
          // renderUsernameOnMessage
        /> */}
      </SafeAreaView>
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  textInputStyles: {
    padding: 13,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    width: '75%',
    color: 'black',
    borderColor: 'gray',
  },
  buttonContainer: {
    padding: 15,
    borderRadius: 5,
    width: '65%',
    backgroundColor: 'green',
  },
  buttonTextStyles: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
  },
  msgTextStyles: {
    margin: 20,
    fontSize: 14,
    color: 'gray',
  },

  // Header Styles

  headerContainer: {
    borderBottomWidth: 1,
    paddingTop: 0,
    backgroundColor: 'white',
    height: Platform.select({
      android: 56,
      default: 45,
      ios: 60,
    }),
  },
  headerRightContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
  headerLeftContainer: {
    alignSelf: 'center',
  },
  // Gifted Chat Styles
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 5,
    minHeight: Platform.OS === 'ios' ? 77 : 60,
  },
  inputStyles: {
    padding: Platform.OS === 'android' ? 2 : 5,
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    color: 'black',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e0e0e0',
    width: '100%',
    textAlignVertical: 'top',
    paddingHorizontal: Platform.OS === 'android' ? 10 : 10,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'android' ? 3 : 11,
  },
  sendButton: {
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 0,
    marginBottom: 1,
    alignItems: 'flex-end',
  },
});
