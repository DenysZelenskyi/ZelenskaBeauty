import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './searchBarStyles';

const SearchBar = ({value, onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#71727A" style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;
