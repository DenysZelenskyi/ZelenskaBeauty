import React, {useContext} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './confirmationScreenStyles';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/SCREENS';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedStyles} from '../appStyles';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  return (
    <SafeAreaView style={themedStyles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.checkmark}>✓</Text>
        <Text style={styles.title}>Appointment Confirmed!</Text>
      </View>
      <View style={styles.messageBox}>
        <Text style={styles.text}>🎉 You're all set!</Text>
        <Text style={styles.text}>
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
