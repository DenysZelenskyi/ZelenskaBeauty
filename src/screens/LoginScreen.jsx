import React, {useState, useContext} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './loginScreenStyles';
import InputField from '../components/InputField';
import MainButton from '../components/MainButton';
import SCREENS from '../constants/SCREENS';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedStyles} from '../appStyles';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={themedStyles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.conteinerWelcome}>
        <Text style={themedStyles.text}>Welcome!</Text>

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
          <Text style={themedStyles.text}>Forgot password?</Text>
        </TouchableOpacity>

        <MainButton
          title="Login"
          onPress={handleLogin}
          buttonStyle={styles.marginBtm20}
        />

        <View style={styles.registerRow}>
          <Text style={themedStyles.text}>Not a member?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={themedStyles.text}
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
