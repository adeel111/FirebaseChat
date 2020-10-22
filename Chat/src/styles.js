import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
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
    flex: 1,
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
    padding: 5,
    flexDirection: 'row',
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

  //   Sender Bubble
  senderBubbleStyles: {
    margin: 3,
    padding: 15,
    borderRadius: 25,
    borderBottomEndRadius: 0,
    maxWidth: '70%',
    alignSelf: 'flex-end',
    backgroundColor: '#00AEEF',
  },
  senderMsgStyles: {
    fontSize: 17,
    color: 'white',
  },
  senderTimeStyles: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'flex-end',
  },

  //   Receiver Bubble
  receiverBubbleStyles: {
    margin: 3,
    padding: 15,
    borderRadius: 25,
    borderBottomStartRadius: 0,
    maxWidth: '70%',
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
  },
  receiverMsgStyles: {
    fontSize: 17,
    color: 'black',
  },
  receiverTimeStyles: {
    fontSize: 13,
    color: 'black',
    alignSelf: 'flex-end',
  },
});

export default styles;
