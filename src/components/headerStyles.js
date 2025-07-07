import {StyleSheet} from 'react-native';
import typography from '../styles/typography';
import colors from '../styles/colors';

export const getThemedHeaderStyles = theme =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme === 'dark' ? colors.black : colors.white,
    },
    side: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    center: {
      flex: 1,
      alignItems: 'center',
    },
    logout: {
      color: theme === 'dark' ? colors.greenLighter : colors.greenPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    title: {
      ...typography.h3,
      color: theme === 'dark' ? colors.greenLighter : colors.black,
    },
    leftLabel: {
      color: colors.greenPrimary,
      fontWeight: 'bold',
      fontSize: 16,
    },
    cartButton: {
      marginLeft: 16,
    },
    cartBadge: {
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
    },
    cartBadgeText: {
      color: '#fff',
      fontSize: 10,
      fontWeight: 'bold',
    },
  });
