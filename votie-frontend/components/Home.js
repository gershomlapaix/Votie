import * as React from 'react';
import Constants from 'expo-constants';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>

      <Button
        title="Go to voting page"
        onPress={() => {
          navigation.navigate("voting page");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
