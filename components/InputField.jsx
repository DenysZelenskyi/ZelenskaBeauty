import React from 'react';
import {TextInput} from 'react-native';
import styles from './inputFieldStyles';
import typography from '../styles/typography';

const InputField = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={[styles.input, typography.bodyM, style]} // добавляем внешний стиль
      placeholderTextColor="#999"
    />
  );
};

export default InputField;
