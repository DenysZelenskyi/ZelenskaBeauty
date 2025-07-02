import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './confirmationScreenStyles';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/SCREENS';

const ConfirmationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.checkmark}>✓</Text>
      <Text style={styles.title}>Appointment Confirmed!</Text>

      <View style={styles.messageBox}>
        <Text style={styles.message}>🎉 You’re all set!</Text>
        <Text style={styles.message}>
          Thanks for booking with Zelenska Beauty ✨
        </Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate(SCREENS.HOME)}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
