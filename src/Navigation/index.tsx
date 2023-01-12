import React, { useContext } from "react";
import {Text, View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetails from "../components/CoinDetails";
import { BottomNavigation } from "./BottomNavigation";
import tw from "tailwind-react-native-classnames";
import CoinHeader from "../components/headers/Coin.header";
import UserScreen from "../screens/UserScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUp from "../screens/auth/SignUpScreen";
import { authContext } from "../contexts/auth.context";
import { UserType } from "../@types/user.type";



export const Navigation = () => {
  const routes = {
    protectedRoutes: [
      {
        name: "Token",
        options : {
          header: ()=><CoinHeader></CoinHeader>
        },
        component: BottomNavigation
      },
      {
        name: "CoinDetails",
        options : {
          header: ()=><View></View>
        },
        component: CoinDetails,
      },
      {
        name: "UserScreen",
        component: UserScreen,
      },
    ],
    publicRoutes: [
      {
        name: "Login",
        options : {
          header: ()=><View></View>
        },
        component: LoginScreen,
      },
      {
        name: "SignUp",
        component: SignUp,
      },
    ]
  };
  const Stack = createNativeStackNavigator();
  const {user} = useContext(authContext) as UserType;
  return (
    <Stack.Navigator
      initialRouteName="Token"
      screenOptions={{ 
        // headerShown: true,
        headerStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      { 
        routes.protectedRoutes.map((route)=><Stack.Screen name={route.name} component = {route.component} options = {route.options}/>)
      }
      {
        routes.publicRoutes.map((route)=><Stack.Screen name={route.name} component = {route.component} options = {route.options}/>)
      }
    </Stack.Navigator>
  );
};
