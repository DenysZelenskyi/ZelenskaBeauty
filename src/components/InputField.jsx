import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './inputFieldStyles';
import typography from '../styles/typography';

const InputField = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
  error = false,
  errorMessage = '',
}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={[
          styles.input,
          typography.bodyM,
          style,
          error && styles.inputError,
        ]}
        placeholderTextColor="#999"
      />
      {error && !!errorMessage && (
        <Text style={{color: '#FF3B30', fontSize: 12, marginTop: 4}}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default InputField;
