import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './mainButtonStyles';

const MainButton = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, disabled && {opacity: 0.5}]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
