import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/SCREENS';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedStyles} from '../appStyles';
import {getThemedStep3Styles} from './step3ScreenStyles';

const Step3Screen = ({route}) => {
  const navigation = useNavigation();
  const {service} = route.params;
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);
  const themedStep3 = getThemedStep3Styles(theme);

  return (
    <SafeAreaView style={themedStep3.container}>
      <View style={themedStep3.stepper}>
        {[1, 2, 3].map(step => (
          <View key={step} style={themedStep3.stepItem}>
            <View
              style={[
                themedStep3.stepCircle,
                step <= 2 && themedStep3.stepCircleDone,
                step === 3 && themedStep3.stepCircleActive,
              ]}>
              <Text style={themedStep3.stepNumber}>
                {step <= 2 ? '✓' : step}
              </Text>
            </View>
            <Text
              style={[
                themedStep3.stepLabel,
                step <= 2 && themedStep3.stepLabelDone,
                step === 3 && themedStep3.stepLabelActive,
              ]}>
              Step
            </Text>
          </View>
        ))}
      </View>

      <View style={themedStep3.imageRow}>
        <Image
          source={require('../../assets/map-placeholder.png')}
          style={themedStep3.cardImage}
        />
      </View>
      <View style={themedStep3.descriptionContainer}>
        <Text style={themedStep3.title}>{service.title}</Text>
        <Text style={themedStep3.price}>{service.price}</Text>

        <Text style={themedStep3.sectionTitle}>ABOUT</Text>
        <Text style={themedStep3.description}>
          This service will take approximately 4 hours.
        </Text>
        <Text style={themedStep3.description}>
          Need a different time?{' '}
          <Text style={themedStep3.changeTimeText}>👉 Change time</Text>
        </Text>
        <Text style={themedStep3.description}>
          {`We'll be waiting for you at Zelenska Beauty\n9455 S Santa Monica Blvd, Beverly Hills, CA 90210`}
        </Text>
      </View>

      <TouchableOpacity
        style={themedStep3.changeTimeButton}
        onPress={() => navigation.goBack()}>
        <Text style={themedStep3.changeTimeText}>Change time</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={themedStep3.doneButton}
        onPress={() => navigation.navigate(SCREENS.CONFIRMATION)}>
        <Text style={themedStep3.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Step3Screen;
