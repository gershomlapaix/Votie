import * as React from "react";
import { Button, View } from "react-native";
import VotingScreen from "./components/voting";
import HomeScreen from "./components/Home";
import LoginScreen from "./components/auth/Login";
import ResultsScreen from "./components/Results";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./context/AuthContext";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="voting page" component={VotingScreen} />
          <Drawer.Screen name="Results" component={ResultsScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
