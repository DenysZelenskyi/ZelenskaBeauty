import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './confirmationCodeStyles';
import SCREENS from '../constants/SCREENS';

const ConfirmationCode = ({navigation}) => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      const nextInput = `input${index + 1}`;
      refs[nextInput]?.focus();
    }
  };

  const refs = {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding20}>
        <Text style={styles.title}>Enter confirmation code</Text>
        <Text style={styles.subtitle}>
          A 4-digit code was sent to {'\n'} 661 123 12 23
        </Text>

        <View style={styles.codeContainer}>
          {code.map((value, index) => (
            <TextInput
              key={index}
              ref={ref => (refs[`input${index}`] = ref)}
              style={styles.codeInput}
              value={value}
              onChangeText={text => handleChange(text, index)}
              maxLength={1}
              keyboardType="number-pad"
            />
          ))}
        </View>

        <TouchableOpacity>
          <Text style={styles.resendText}>Resend code</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate(SCREENS.HOME)}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationCode;
