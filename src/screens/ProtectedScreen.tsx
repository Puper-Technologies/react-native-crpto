import { View, } from "react-native";
import React, { ReactElement, useContext, useEffect } from "react";
import { authContext } from "../contexts/auth.context";
import Login from "./auth/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function ProtectedScreen(props: {component: any, options: any,name: string }) {
    const Stack = createNativeStackNavigator();
  const user = useContext(authContext);
  return (
    user?<Stack.Screen name={props.name} options={props.options} component={props.component} />:<Stack.Screen name= {"Login"} component={Login} />
  );
}
