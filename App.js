import React, { useCallback, useState } from "react";
import { NativeBaseProvider, Text, Box, StatusBar } from "native-base";
import {
  LoginScreen,
  DataScreen,
  SingleDataScreen,
  HomeScreen,
  RegisterScreen,
} from "./src/Screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import AuthNav from "./src/Navigation/AuthNav";
import BottomNav from "./src/Navigation/BottomNav";
import { useFonts } from "expo-font";
import AuthApi from "./src/Contexts/AuthContxt";
const Stack = createNativeStackNavigator();
export default function App() {
  const [auth, setAuth] = useState(null);
  return (
    // <NativeBaseProvider>
    //   <NavigationContainer>
    //     <StatusBar hidden={true}/>
    //     <Stack.Navigator initialRouteName="Data" screenOptions={{headerShown:false}}>
    //       <Stack.Screen name="Login" component={LoginScreen}/>
    //       <Stack.Screen name="Data" component={DataScreen}/>
    //       <Stack.Screen name="Register" component={RegisterScreen}/>
    //       <Stack.Screen name="Bottom" component={BottomNav}/>
    //       <Stack.Screen name="SingleData" component={SingleDataScreen}/>
    //       <Stack.Screen name="Home" component={HomeScreen}/>
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </NativeBaseProvider>
    <NativeBaseProvider>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <NavigationContainer>
          <AuthNav />
        </NavigationContainer>
      </AuthApi.Provider>
    </NativeBaseProvider>
  );
}
