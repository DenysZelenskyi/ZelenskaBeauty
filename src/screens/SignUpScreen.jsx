import React, {useState, useContext} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import InputField from '../components/InputField';
import MainButton from '../components/MainButton';
import styles from './signUpScreenStyles';
import SCREENS from '../constants/SCREENS';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedStyles} from '../appStyles';
import {registerUser} from '../api/api';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/userSlice';

const validatePhone = phone => {
  const ua = /^(\+?380|0)\d{9}$/;
  const us = /^(\+?1)?\d{10}$/;
  const usPretty = /^(\+?1)?[\s\-\(\)]*\d{3}[\s\-\)]*\d{3}[\s\-]?\d{4}$/;
  return ua.test(phone) || us.test(phone) || usPretty.test(phone);
};

const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'Enter your first name';
    if (!lastName.trim()) newErrors.lastName = 'Enter your last name';
    if (!phone.trim()) newErrors.phone = 'Enter your phone number';
    else if (!validatePhone(phone)) newErrors.phone = 'Invalid phone number';
    if (!password) newErrors.password = 'Enter a password';
    else if (password.length < 6) newErrors.password = 'Minimum 6 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm your password';
    else if (password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!agree) newErrors.agree = 'You must agree to the terms';
    return newErrors;
  };

  const handleContinue = async () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);
    try {
      const user = await registerUser({firstName, lastName, phone, password});
      dispatch(setUser(user));
      setFirstName('');
      setLastName('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
      setAgree(false);
      setErrors({});
      navigation.navigate(SCREENS.CONFIRMATION_CODE);
    } catch (error) {
      setErrors({api: error.message});
    } finally {
      setLoading(false);
    }
  };

  const disabledButton =
    loading ||
    !firstName.trim() ||
    !lastName.trim() ||
    !phone.trim() ||
    !password ||
    !confirmPassword ||
    !agree ||
    Object.keys(errors).length > 0;

  return (
    <SafeAreaView style={themedStyles.container}>
      <ScrollView contentContainerStyle={themedStyles.container}>
        <View style={styles.padding40}>
          <Text style={themedStyles.text}>Sign up</Text>
          <Text style={themedStyles.text}>
            Create an account to get started
          </Text>

          <InputField
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
            error={!!errors.firstName}
            errorMessage={errors.firstName}
          />

          <InputField
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
            error={!!errors.lastName}
            errorMessage={errors.lastName}
          />

          <InputField
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            error={!!errors.phone}
            errorMessage={errors.phone}
          />

          <Text style={themedStyles.text}>Password</Text>

          <InputField
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            error={!!errors.password}
            errorMessage={errors.password}
          />

          <InputField
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
            error={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword}
          />

          <View style={styles.checkboxRow}>
            <CheckBox disabled={false} value={agree} onValueChange={setAgree} />
            <Text style={themedStyles.text}>
              I've read and agree with the <Text>Terms and Conditions</Text> and
              the <Text>Privacy Policy</Text>.
            </Text>
          </View>
          {!!errors.agree && (
            <Text style={{color: '#FF3B30', fontSize: 12, marginBottom: 8}}>
              {errors.agree}
            </Text>
          )}
          {!!errors.api && (
            <Text style={{color: '#FF3B30', fontSize: 12, marginBottom: 8}}>
              {errors.api}
            </Text>
          )}
          <MainButton
            title={loading ? 'Loading...' : 'Continue'}
            onPress={handleContinue}
            buttonStyle={styles.btn}
            disabled={disabledButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
