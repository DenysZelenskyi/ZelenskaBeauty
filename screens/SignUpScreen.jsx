import React, {useState} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import InputField from '../components/InputField';
import MainButton from '../components/MainButton';
import styles from './signUpScreenStyles';
import SCREENS from '../constants/SCREENS';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleContinue = () => {
    if (agree) {
      navigation.navigate(SCREENS.CONFIRMATION_CODE);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.padding40}>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subtitle}>Create an account to get started</Text>

          <InputField
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <InputField
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />

          <Text style={styles.passwordLabel}>Password</Text>

          <InputField
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <InputField
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
          />

          <View style={styles.checkboxRow}>
            <CheckBox disabled={false} value={agree} onValueChange={setAgree} />
            <Text style={styles.checkboxText}>
              I’ve read and agree with the <Text>Terms and Conditions</Text> and
              the <Text>Privacy Policy</Text>.
            </Text>
          </View>

          <MainButton
            title="Continue"
            onPress={handleContinue}
            buttonStyle={styles.btn}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
