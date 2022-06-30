import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Voting from './components/voting'

export default function App() {
  return (
    <View style={styles.container}>
      <Voting/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
 
});
