import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SCREENS from '../constants/SCREENS.js';

import HomeScreen from '../screens/HomeScreen';
import ServiceDetailsScreen from '../screens/ServiceDetailsScreen';
import BookingScreen from '../screens/BookingScreen.jsx';
import Step2Screen from '../screens/step2Screen.jsx';
import Step3Screen from '../screens/step3Screen.jsx';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmationCode from '../screens/ConfirmationCode.jsx';
import {ThemeContext} from '../context/ThemeContext';
import colors from '../styles/colors';
import ShopScreen from '../screens/ShopScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName={SCREENS.HOME}
    screenOptions={{headerShown: false}}>
    <Drawer.Screen
      name={SCREENS.HOME}
      component={HomeScreen}
      options={{title: 'Home'}}
    />
    <Drawer.Screen
      name="Shop"
      component={ShopScreen}
      options={{title: 'Shop'}}
    />
  </Drawer.Navigator>
);

const Navigation = () => {
  const {theme} = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const headerStyle = {
    backgroundColor: isDark ? colors.black : colors.white,
  };
  const headerTitleStyle = {
    color: isDark ? colors.white : colors.black,
    fontWeight: '700',
    fontSize: 20,
  };
  const headerTintColor = isDark ? colors.greenPrimary : colors.black;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle,
          headerTitleStyle,
          headerTintColor,
        }}>
        <Stack.Screen
          name={SCREENS.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.SIGN_UP}
          component={SignUpScreen}
          options={{title: 'Sign up'}}
        />
        <Stack.Screen
          name={SCREENS.CONFIRMATION_CODE}
          component={ConfirmationCode}
          options={{title: 'Enter Code'}}
        />
        <Stack.Screen
          name={SCREENS.HOME}
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.BOOKING}
          component={BookingScreen}
          options={{title: 'Booking'}}
        />
        <Stack.Screen
          name={SCREENS.SERVICE_DETAILS}
          component={ServiceDetailsScreen}
          options={{title: 'Service Details'}}
        />
        <Stack.Screen
          name={SCREENS.STEP2}
          component={Step2Screen}
          options={{title: 'Book an Appointment - Step 2'}}
        />
        <Stack.Screen
          name={SCREENS.STEP3}
          component={Step3Screen}
          options={{title: 'Book an Appointment - Step 3'}}
        />
        <Stack.Screen
          name={SCREENS.CONFIRMATION}
          component={ConfirmationScreen}
          options={{title: 'Appointment Confirmed'}}
        />
        <Stack.Screen
          name={'Cart'}
          component={require('../screens/CartScreen.jsx').default}
          options={{title: 'Cart'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
