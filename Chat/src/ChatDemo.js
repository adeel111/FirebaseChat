import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Pusher from 'pusher-js/react-native';

const ChatDemo = () => {
  const [message, setMessage] = useState('');
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

      setMsg(data.message_original.message);
    });

    // getAllMessages();

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
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSend = () => {
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

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContainer}>
        <TextInput
          style={styles.textInputStyles}
          placeholder="Enter Message"
          placeholderTextColor="gray"
          autoCapitalize="none"
          keyboardType={'default'}
          onChangeText={(text) => setMessage(text)}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onSend()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyles}>Send Message</Text>
        </TouchableOpacity>

        <Text style={styles.msgTextStyles}>{msg}</Text>
      </SafeAreaView>
    </>
  );
};

export default ChatDemo;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
