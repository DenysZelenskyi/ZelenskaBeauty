import {StyleSheet} from 'react-native';
import typography from '../styles/typography';
import colors from '../styles/colors';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  side: {
    flex: 1,
    alignItems: 'flex-start',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  logout: {
    color: colors.greenPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    ...typography.h3,
    color: typography.black,
  },
});
