// @flow

import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";

const HomeStack = createStackNavigator({
  WalletDashboard: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      title: "Wallets"
    }
  }
});

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack
    // Settings: SettingsStack,
    //Receive:  ReceiveStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-cash${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#F59332",
      inactiveTintColor: "#4D4D4D"
    }
  }
);

export default BottomTabNavigator;