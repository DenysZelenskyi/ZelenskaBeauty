import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

export const getThemedSearchBarStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme === 'dark' ? colors.darkGray : colors.grayLight,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: 16,
      marginHorizontal: 16,
    },
    input: {
      flex: 1,
      color: theme === 'dark' ? colors.white : colors.black,
      fontSize: 16,
      marginLeft: 8,
    },
    icon: {
      color: theme === 'dark' ? colors.white : colors.grayDark,
      fontSize: 20,
    },
  });
