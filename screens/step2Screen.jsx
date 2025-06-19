import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './step2ScreenStyles';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/SCREENS';

const Step2Screen = ({route}) => {
  const {service, selectedDate, selectedTime} = route.params;
  const navigation = useNavigation();

  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
  const currentIndex = timeSlots.indexOf(selectedTime);

  const getPrevTime = () => {
    return currentIndex > 0 ? timeSlots[currentIndex - 1] : timeSlots[0];
  };

  const getNextTime = () => {
    return currentIndex < timeSlots.length - 1
      ? timeSlots[currentIndex + 1]
      : timeSlots[timeSlots.length - 1];
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stepper}>
        {[1, 2, 3].map(step => (
          <View key={step} style={styles.stepItem}>
            <View
              style={[
                styles.stepCircle,
                step === 1 && styles.stepCircleDone, // уже пройден
                step === 2 && styles.stepCircleActive, // текущий
              ]}>
              <Text style={styles.stepNumber}>{step === 1 ? '✓' : step}</Text>
            </View>
            <Text
              style={[
                styles.stepLabel,
                step === 1 && styles.stepLabelDone,
                step === 2 && styles.stepLabelActive,
              ]}>
              Step
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Image source={service.image} style={styles.image} />
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.price}>{service.price}</Text>
      </View>

      <View style={styles.timePicker}>
        <TouchableOpacity
          onPress={() => console.log(getPrevTime())}
          disabled={currentIndex === 0}
          style={[styles.sideTime, currentIndex === 0 && styles.disabled]}>
          <Text style={styles.timeText}>{getPrevTime()}</Text>
        </TouchableOpacity>

        <View style={styles.mainTime}>
          <Text style={styles.timeText}>
            {selectedDate} {selectedTime}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => console.log(getNextTime())}
          disabled={currentIndex === timeSlots.length - 1}
          style={[
            styles.sideTime,
            currentIndex === timeSlots.length - 1 && styles.disabled,
          ]}>
          <Text style={styles.timeText}>{getNextTime()}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() =>
          navigation.navigate(SCREENS.STEP3, {
            service,
            selectedDate,
            selectedTime,
          })
        }>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Step2Screen;
