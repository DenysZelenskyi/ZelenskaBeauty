import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './mainButtonStyles';

const MainButton = ({title, onPress, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
