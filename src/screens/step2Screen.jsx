import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/SCREENS';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedStyles} from '../appStyles';
import {getThemedStep2Styles} from './step2ScreenStyles';

const Step2Screen = ({route}) => {
  const {service, selectedDate, selectedTime} = route.params;
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);
  const themedStep2 = getThemedStep2Styles(theme);

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
    <SafeAreaView style={themedStep2.container}>
      <View style={themedStep2.stepper}>
        {[1, 2, 3].map(step => (
          <View key={step} style={themedStep2.stepItem}>
            <View
              style={[
                themedStep2.stepCircle,
                step === 1 && themedStep2.stepCircleDone,
                step === 2 && themedStep2.stepCircleActive,
              ]}>
              <Text style={themedStep2.stepNumber}>
                {step === 1 ? '✓' : step}
              </Text>
            </View>
            <Text
              style={[
                themedStep2.stepLabel,
                step === 1 && themedStep2.stepLabelDone,
                step === 2 && themedStep2.stepLabelActive,
              ]}>
              Step
            </Text>
          </View>
        ))}
      </View>

      <View style={themedStep2.card}>
        <Image source={{uri: service.image}} style={themedStep2.image} />
        <Text style={themedStep2.title}>{service.title}</Text>
        <Text style={themedStep2.price}>{service.price}</Text>
      </View>

      <View style={themedStep2.timePicker}>
        <TouchableOpacity
          onPress={() => console.log(getPrevTime())}
          disabled={currentIndex === 0}
          style={[
            themedStep2.sideTime,
            currentIndex === 0 && themedStep2.disabled,
          ]}>
          <Text style={themedStep2.timeText}>{getPrevTime()}</Text>
        </TouchableOpacity>

        <View style={themedStep2.mainTime}>
          <Text style={themedStep2.timeText}>
            {selectedDate} {selectedTime}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => console.log(getNextTime())}
          disabled={currentIndex === timeSlots.length - 1}
          style={[
            themedStep2.sideTime,
            currentIndex === timeSlots.length - 1 && themedStep2.disabled,
          ]}>
          <Text style={themedStep2.timeText}>{getNextTime()}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={themedStep2.confirmButton}
        onPress={() =>
          navigation.navigate(SCREENS.STEP3, {
            service,
            selectedDate,
            selectedTime,
          })
        }>
        <Text style={themedStep2.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Step2Screen;
