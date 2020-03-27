import 'react-native-gesture-handler';
import React from 'react';

import './config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

// import { Container } from './styles';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </NavigationContainer>
  );
}
