import React from 'react';
import {LogBox} from 'react-native';
import ChatDemo from './src/ChatDemo';
import Chat from './src/Chat';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      {/* <ChatDemo /> */}
      <Chat />
    </>
  );
};

export default App;
