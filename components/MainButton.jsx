import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './mainButtonStyles';

const MainButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
