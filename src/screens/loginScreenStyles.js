import {StyleSheet} from 'react-native';
import colors from '../styles/colors';
import typography from '../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  conteinerWelcome: {
    padding: 40,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 32,
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 24,
  },
  forgotPassword: {
    color: colors.greenPrimary,
    fontSize: typography.actionM,
    marginBottom: 100,
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  registerText: {
    fontSize: 14,
    color: colors.grayDark,
  },
  registerLink: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.greenPrimary,
    marginLeft: 6,
  },
  marginBtm20: {
    marginBottom: 20,
  },
});

export default styles;
