import {StyleSheet} from 'react-native';
import colors from './styles/colors';

export const getThemedStyles = theme =>
  StyleSheet.create({
    centered: {
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? colors.black : colors.white,
    },
    text: {
      color: theme === 'dark' ? colors.white : colors.black,
    },
  });
