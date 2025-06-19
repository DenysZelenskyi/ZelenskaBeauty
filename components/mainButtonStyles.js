import {StyleSheet} from 'react-native';
import colors from '../styles/colors';
import typography from '../styles/typography';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.greenPrimary,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    lineHeight: 48,
    fontFamily: typography.actionM,
    color: 'white',
  },
});

export default styles;
