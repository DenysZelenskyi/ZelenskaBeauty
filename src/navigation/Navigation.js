import React from 'react';
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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator initialRouteName={SCREENS.HOME}>
    <Drawer.Screen
      name={SCREENS.HOME}
      component={HomeScreen}
      options={{title: 'Home'}}
    />
    <Drawer.Screen
      name={SCREENS.BOOKING}
      component={BookingScreen}
      options={{title: 'Booking'}}
    />
  </Drawer.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
