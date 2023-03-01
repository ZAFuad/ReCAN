import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen, HomeScreen, DetailScreen,BidScreen } from '../Screens';
import ROUTES from './routes';
import BottomNav from './BottomNav';
import FormScreen from '../Screens/FormScreen';

const Stack = createStackNavigator();

function AuthNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ROUTES.DETAIL} component={DetailScreen} />
      <Stack.Screen name={ROUTES.BID} component={BidScreen} />
      <Stack.Screen name={ROUTES.FORM} component={FormScreen} />
      <Stack.Screen name={ROUTES.HOME} component={BottomNav} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default AuthNav;