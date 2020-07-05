import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/Main";
import Luxury from "./pages/Luxury";
import Details from "./pages/Details";
const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Main" component={Main} />
        <Screen name="Luxury" component={Luxury} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}
