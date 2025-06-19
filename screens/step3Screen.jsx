import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './step3ScreenStyles';
import SCREENS from '../constants/SCREENS';

const Step3Screen = ({route}) => {
  const navigation = useNavigation();
  const {service} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stepper}>
        {[1, 2, 3].map(step => (
          <View key={step} style={styles.stepItem}>
            <View
              style={[
                styles.stepCircle,
                step <= 2 && styles.stepCircleDone,
                step === 3 && styles.stepCircleActive,
              ]}>
              <Text style={styles.stepNumber}>{step <= 2 ? '✓' : step}</Text>
            </View>
            <Text
              style={[
                styles.stepLabel,
                step <= 2 && styles.stepLabelDone,
                step === 3 && styles.stepLabelActive,
              ]}>
              Step
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.imageRow}>
        <Image
          source={require('../assets/map-placeholder.png')}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.descriptionConteiner}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.price}>{service.price}</Text>

        <Text style={styles.sectionTitle}>ABOUT</Text>
        <Text style={styles.description}>
          This service will take approximately 4 hours.
        </Text>
        <Text style={styles.description}>
          Need a different time?{' '}
          <Text style={styles.changeText}>👉 Change time</Text>
        </Text>
        <Text style={styles.description}>
          We’ll be waiting for you at Zelenska Beauty{'\n'}
          9455 S Santa Monica Blvd, Beverly Hills, CA 90210
        </Text>
      </View>

      <TouchableOpacity
        style={styles.changeTimeButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.changeTimeButtonText}>Change time</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.navigate(SCREENS.CONFIRMATION)}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Step3Screen;
