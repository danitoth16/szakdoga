import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";
import { f, auth, database } from "./config/config.js";
import CountySights from "./components/CountySights.js";

import Tabs from "./navigation/tabs";
import {
  Feed,
  Home,
  Map,
  Profile,
  Login,
  SignUpScreen,
  Search,
} from "./screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Feed" component={Tabs} />
        <Stack.Screen name="Home" options={{ title: "Counties List" }}>
          {(props) => <Home {...props} countiesData={data.countiesData} />}
        </Stack.Screen>
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Sights" component={CountySights} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Tabs} />
    </Stack.Navigator>
  );
};

export default App;
