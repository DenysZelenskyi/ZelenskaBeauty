import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import styles from './bookingScreenStyles';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/SCREENS';

const BookingScreen = ({route}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const navigation = useNavigation();
  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stepHeader}>
        {[1, 2, 3].map(step => (
          <View key={step} style={styles.stepItem}>
            <View
              style={[
                styles.stepCircle,
                step === 1 && styles.stepCircleActive,
              ]}>
              <Text style={styles.stepNumber}>{step}</Text>
            </View>
            <Text
              style={[styles.stepLabel, step === 1 && styles.stepLabelActive]}>
              Step
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={day => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {selected: true, selectedColor: '#007802'},
          }}
        />
      </View>

      <FlatList
        data={timeSlots}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.timeSlots}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelectedTime(item)}
            style={[
              styles.timeSlot,
              item === selectedTime && styles.timeSlotActive,
            ]}>
            <Text style={styles.timeSlotText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() =>
          navigation.navigate(SCREENS.STEP2, {
            service: route.params?.service,
            selectedDate,
            selectedTime,
          })
        }>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BookingScreen;
