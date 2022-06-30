import * as React from 'react';
import Constants from 'expo-constants';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Results(){
  return(
    <View style={styles.container}>
    <Text>Results page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
