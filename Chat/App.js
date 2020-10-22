import React from 'react';
import {LogBox} from 'react-native';
import ChatDemo from './src/ChatDemo';
import FlatListChat from './src/FlatListChat';
import Chat from './src/Chat';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <FlatListChat />
    </>
  );
};

export default App;
