import React from 'react';
import {TextInput} from 'react-native';
import styles from './inputFieldStyles';
import typography from '../styles/typography';

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={[styles.input, typography.bodyM]}
    />
  );
};

export default InputField;
