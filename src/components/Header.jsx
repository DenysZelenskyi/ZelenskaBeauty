import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/ThemeContext';
import {getThemedHeaderStyles} from './headerStyles';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

const Header = ({
  title,
  showCart = false,
  leftLabel,
  onLeftPress,
  showThemeSwitch = true,
}) => {
  const navigation = useNavigation();
  const {theme, toggleTheme} = useContext(ThemeContext);
  const themedHeaderStyles = getThemedHeaderStyles(theme);
  const cart = useSelector(state => state.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const thumbColor = theme === 'dark' ? colors.greenPrimary : '#fff';
  const trackColor = {false: '#ccc', true: colors.greenPrimary};
  const titleColor =
    theme === 'dark' ? colors.white : themedHeaderStyles.title.color;

  return (
    <View style={themedHeaderStyles.wrapper}>
      <View style={themedHeaderStyles.side}>
        {leftLabel && onLeftPress ? (
          <TouchableOpacity onPress={onLeftPress}>
            <Text
              style={{
                color: colors.greenPrimary,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {leftLabel}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLogout}>
            <Text style={themedHeaderStyles.logout}>Log out</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={themedHeaderStyles.center}>
        <Text style={[themedHeaderStyles.title, {color: titleColor}]}>
          {title}
        </Text>
      </View>
      <View style={themedHeaderStyles.side}>
        {showThemeSwitch && (
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
            thumbColor={thumbColor}
            trackColor={trackColor}
          />
        )}
        {showCart && (
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{marginLeft: 16}}>
            <Icon
              name="shopping-cart"
              size={24}
              color={theme === 'dark' ? colors.greenPrimary : colors.black}
            />
            {cartCount > 0 && (
              <View
                style={{
                  position: 'absolute',
                  top: -6,
                  right: -10,
                  backgroundColor: colors.greenPrimary,
                  borderRadius: 8,
                  minWidth: 16,
                  height: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 3,
                }}>
                <Text style={{color: '#fff', fontSize: 10, fontWeight: 'bold'}}>
                  {cartCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
