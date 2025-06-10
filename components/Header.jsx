import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './headerStyles';

const Header = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.side}>
        <TouchableOpacity onPress={() => console.log('Log out')}>
          <Text style={styles.logout}>Log out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.side} /> пустой блок для симметрии
    </View>
  );
};

export default Header;
