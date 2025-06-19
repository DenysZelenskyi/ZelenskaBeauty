import {StyleSheet} from 'react-native';
import colors from '../styles/colors';
import typography from '../styles/typography';

const styles = StyleSheet.create({
  input: {
    // width: '81%',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.lightestGray,
    fontFamily: typography.bodyM,
  },
});

export default styles;
