import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Navigation } from "./src/Navigation";
import ListContextProvider from "./src/Context";
import { RecoilRoot } from "recoil";
import { LogBox } from "react-native";
import { AuthProvider } from './src/contexts/auth.context';

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

export default function App() {
  // const Drawer = createDrawerNavigator();
  return (
    <AuthProvider>
          <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}
    >
      <ListContextProvider>
       <RecoilRoot>
          <View style={styles.container}>
            <StatusBar style="light" />
            <Navigation/>
          </View> 
        </RecoilRoot>
      </ListContextProvider>
    </NavigationContainer>
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
