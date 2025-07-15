import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Booking" component={BookingScreen} />
      <Drawer.Screen name="Confirmation" component={ConfirmationScreen} />
      <Drawer.Screen name="Account" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
