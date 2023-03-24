import React from 'react';
import { StyleSheet,  View ,TouchableOpacity} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <>
      <NavigationContainer>
      <AppNavigation/>
      </NavigationContainer>
    </>
  );
}
