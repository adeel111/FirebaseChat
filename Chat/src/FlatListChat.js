import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Pusher from 'pusher-js/react-native';
import {Icon, Avatar} from 'react-native-elements';
import styles from './styles';

const FlatListChat = () => {
  const flatList = useRef();
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [fresh, setFresh] = useState(true);
  const [height, setHeight] = useState(20);

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true;

    // Initialization & Configuration
    const pusher = new Pusher('27a94913194564d488b6', {
      cluster: 'mt1',
      authEndpoint:
        'http://techndevs.us/clients/projects/CustomChat/public/api/authtest',
    });

    // Making Connection
    pusher.connection.bind('connected', function (data) {
      // console.log(data.socket_id);
    });

    // Subscribe Channel
    var channel = pusher.subscribe('private-chatify', (data) => {
      // console.log('Subscribe Channel');
      // console.log(data);
    });

    // Accessing Channels
    const channelInfo = pusher.channel('private-chatify');
    // console.log('channel Info');
    // console.log(channelInfo);

    // Listen for Event
    channel.bind('messaging', function (data) {
      console.log('An event was triggered with message');
      // console.log(data);
      // console.log(data.message_original);

      setFresh(!fresh);

      console.log(allMessages);

      // get All Messages
      getAllMessages();
    });

    // get All Messages
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
        // console.log(response.data.messages);
        setAllMessages(response.data.messages);
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
        setMessage('');
        getAllMessages();
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateSize = (height) => {
    setHeight(height);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginLeft: 5, marginRight: 5}}>
        {item.viewType === 'sender' ? (
          // Sender Bubble

          <View style={styles.senderBubbleStyles}>
            <Text style={styles.senderMsgStyles}>{item.message}</Text>
            <Text style={styles.senderTimeStyles}>{item.time}</Text>
          </View>
        ) : (
          // Receiver Bubble
          <View style={styles.receiverBubbleStyles}>
            <Text style={styles.receiverMsgStyles}>{item.message}</Text>
            <Text style={styles.receiverTimeStyles}>{item.time}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        {/* Header Component */}
        <View style={{height: 56, flexDirection: 'row'}}>
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <Icon
              name={'left'}
              type={'antdesign'}
              color={'gray'}
              size={24}
              iconProps={{alignSelf: 'center'}}
            />
          </View>

          <TouchableOpacity style={{flexDirection: 'row'}}>
            <View style={{alignSelf: 'center', marginLeft: 12}}>
              <Avatar
                rounded
                source={{
                  uri: 'https://picsum.photos/200/300',
                }}
              />
            </View>
            <View style={{marginLeft: 2, justifyContent: 'center'}}>
              <Text numberOfLines={1} style={{marginLeft: 10}}>
                Adeel Iftikhar
              </Text>
              <Text numberOfLines={1} style={{marginLeft: 10}}>
                typing...
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{height: 1, backgroundColor: '#e0e0e0', marginBottom: 5}}
        />
        {/* FlatList Component */}
        <View style={{flex: 1, justifyContent: 'center'}}>
          {allMessages.length === 0 ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('./assets/no_messages.png')}
                resizeMode={'contain'}
                style={{width: '100%', height: 250}}
              />
            </View>
          ) : (
            <FlatList
              inverted
              ref={flatList}
              renderItem={renderItem}
              data={allMessages && allMessages}
              extraData={fresh}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}

              // onContentSizeChange={flatList.scrollToEnd()}
              // onLayout={flatList.scrollToEnd({animated: true})}
            />
          )}
        </View>

        {/* InputConatainer Component */}

        {Platform.OS === 'android' ? (
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
              onPress={() => onSend()}
              disabled={message === '' ? true : false}>
              <Icon
                name={'send-circle'}
                type={'material-community'}
                size={38}
                color={'#00AEEF'}
                containerStyle={styles.sendIconContainer}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <KeyboardAvoidingView style={styles.container} behavior="padding">
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
                onPress={() => onSend()}
                disabled={message === '' ? true : false}>
                <Icon
                  name={'send-circle'}
                  type={'material-community'}
                  size={38}
                  color={'#00AEEF'}
                  containerStyle={styles.sendIconContainer}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        )}
      </SafeAreaView>
    </>
  );
};

export default FlatListChat;
