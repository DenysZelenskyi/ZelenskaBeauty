import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './loginScreenStyles';
import InputField from '../components/InputField';
import MainButton from '../components/MainButton';
import SCREENS from '../constants/SCREENS';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.conteinerWelcome}>
        <Text style={styles.title}>Welcome!</Text>

        <InputField
          placeholder="Phone number"
          value={phone}
          onChangeText={setPhone}
          style={styles.marginBtm20}
        />

        <InputField
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.marginBtm20}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <MainButton
          title="Login"
          onPress={handleLogin}
          buttonStyle={styles.marginBtm20}
        />

        <View style={styles.registerRow}>
          <Text style={styles.registerText}>Not a member?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={styles.registerLink}
              onPress={() => navigation.navigate(SCREENS.SIGN_UP)}>
              {' '}
              Register now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
