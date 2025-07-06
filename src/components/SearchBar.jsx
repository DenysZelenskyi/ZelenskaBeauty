import React, {useContext} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedSearchBarStyles} from './searchBarStyles';

const SearchBar = ({value, onChangeText, placeholder}) => {
  const {theme} = useContext(ThemeContext);
  const themedStyles = getThemedSearchBarStyles(theme);

  return (
    <View style={themedStyles.container}>
      <Icon name="search" style={themedStyles.icon} />
      <TextInput
        style={themedStyles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme === 'dark' ? '#aaa' : '#888'}
      />
    </View>
  );
};

export default SearchBar;
