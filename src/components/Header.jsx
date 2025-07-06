import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedHeaderStyles} from './headerStyles';
import colors from '../styles/colors';

const Header = ({title}) => {
  const navigation = useNavigation();
  const {theme, toggleTheme} = useContext(ThemeContext);
  const themedHeaderStyles = getThemedHeaderStyles(theme);

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const thumbColor = theme === colors.midGray ? colors.greenPrimary : '#fff';
  const trackColor = {false: colors.midGray, true: colors.midGray};

  const titleColor =
    theme === 'dark' ? colors.white : themedHeaderStyles.title.color;

  return (
    <View style={themedHeaderStyles.wrapper}>
      <View style={themedHeaderStyles.side}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={themedHeaderStyles.logout}>Log out</Text>
        </TouchableOpacity>
      </View>
      <View style={themedHeaderStyles.center}>
        <Text style={[themedHeaderStyles.title, {color: titleColor}]}>
          {title}
        </Text>
      </View>
      <View style={themedHeaderStyles.side}>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
          thumbColor={thumbColor}
          trackColor={trackColor}
        />
      </View>
    </View>
  );
};

export default Header;
