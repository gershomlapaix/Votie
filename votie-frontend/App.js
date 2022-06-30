import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Button } from 'react-native';
import Constants from 'expo-constants';
import VotingScreen from './components/voting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>

      <Button
        title="Go to home"
        onPress={() => {
          navigation.navigate('voting page');
        }}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="voting page" component={VotingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
