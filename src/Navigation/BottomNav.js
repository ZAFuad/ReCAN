import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import {
  SingleDataScreen,
  ProfileScreen,
  DataScreen,
  HomeScreen,
  Scanner,
  WalletScreen,
  ManufacturerScreen,
  RetailerScreen,
  RecyclerScreen,
  CollectorScreen,

} from "../Screens";
import ROUTES from "./routes";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../data/colors";
import { StyleSheet } from "react-native";
import FormScreen from "../Screens/FormScreen";
import AuthApi from "../Contexts/AuthContxt";

const Tab = createBottomTabNavigator();

function BottomNav() {
  const auth = useContext(AuthApi);
  console.log(auth.auth);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: Colors.main,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === ROUTES.HOME) {
            iconName = focused ? "home" : "home-outline";
            color = focused ? Colors.buttonDark : Colors.secondary;
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? "wallet" : "wallet-outline";
            color = focused ? Colors.buttonDark : Colors.secondary;
          } else if (route.name === ROUTES.SCANNER || route.name === ROUTES.MANUFACTURER || route.name === ROUTES.RETAILER || route.name === ROUTES.RECYCLER || route.name === ROUTES.COLLECTOR) {
            color = focused ? Colors.buttonDark : Colors.secondary;
            iconName = focused ? "ios-qr-code-sharp" : "qr-code-outline";
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
    >
      {auth.auth === "user" ? (
        <>
          <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
          <Tab.Screen name={ROUTES.SCANNER} component={Scanner} />
          <Tab.Screen name={ROUTES.WALLET} component={WalletScreen} />
        </>
      ) : (
        <Tab.Screen name={ROUTES.MANUFACTURER} component={ManufacturerScreen} />
      )}
    </Tab.Navigator>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "white",
    borderTopWidth: 0,
    height: 60,
  },
});
