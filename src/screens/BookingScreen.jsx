import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
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

  // Настройки календаря для темной темы
  const calendarTheme = {
    backgroundColor: theme === 'dark' ? colors.black : colors.white,
    calendarBackground: theme === 'dark' ? colors.black : colors.white,
    textSectionTitleColor: theme === 'dark' ? colors.white : colors.black,
    selectedDayBackgroundColor: colors.greenPrimary,
    selectedDayTextColor: colors.white,
    todayTextColor: colors.greenPrimary,
    dayTextColor: theme === 'dark' ? colors.white : colors.black,
    textDisabledColor: theme === 'dark' ? colors.grayMedium : colors.grayLight,
    dotColor: colors.greenPrimary,
    selectedDotColor: colors.white,
    arrowColor: theme === 'dark' ? colors.white : colors.black,
    monthTextColor: theme === 'dark' ? colors.white : colors.black,
    indicatorColor: theme === 'dark' ? colors.white : colors.black,
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 13,
  };

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
        <Calendar
          onDayPress={day => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: colors.greenPrimary,
            },
          }}
          theme={calendarTheme}
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
