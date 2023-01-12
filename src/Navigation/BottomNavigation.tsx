import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import WatchListScreen from "../screens/WatchListScreen";
import UserScreen from "../screens/UserScreen";
import TradeScreen from "../screens/TradeScreen";
import AssetScreen from "../screens/AssetScreen";

export const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="home" size={focused ? 27 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={TradeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="shopping-bag" size={focused ? 27 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="bar-chart-o" size={focused ? 27 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Asset"
        component={AssetScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="user" size={focused ? 27 : 25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
