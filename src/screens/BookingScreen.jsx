import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CustomCalendar from '../components/CustomCalendar';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/SCREENS';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedStyles} from '../appStyles';
import {getThemedBookingStyles} from './bookingScreenStyles';
import colors from '../styles/colors';

const BookingScreen = ({route}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);
  const themedBooking = getThemedBookingStyles(theme);
  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];

  return (
    <SafeAreaView style={themedBooking.container}>
      <View style={themedBooking.stepHeader}>
        {[1, 2, 3].map(step => (
          <View key={step} style={themedBooking.stepItem}>
            <View
              style={[
                themedBooking.stepCircle,
                step === 1 && themedBooking.stepCircleActive,
              ]}>
              <Text style={themedBooking.stepNumber}>{step}</Text>
            </View>
            <Text
              style={[
                themedBooking.stepLabel,
                step === 1 && themedBooking.stepLabelActive,
              ]}>
              Step
            </Text>
          </View>
        ))}
      </View>

      <View style={themedBooking.calendarContainer}>
        <CustomCalendar
          onDayPress={day => setSelectedDate(day.dateString)}
          selectedDate={selectedDate}
          theme={theme}
        />
      </View>

      <FlatList
        data={timeSlots}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={themedBooking.timeSlots}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelectedTime(item)}
            style={[
              themedBooking.timeSlot,
              item === selectedTime && themedBooking.timeSlotActive,
            ]}>
            <Text style={themedBooking.timeSlotText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={themedBooking.continueButton}
        onPress={() =>
          navigation.navigate(SCREENS.STEP2, {
            service: route.params?.service,
            selectedDate,
            selectedTime,
          })
        }>
        <Text style={themedBooking.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BookingScreen;
