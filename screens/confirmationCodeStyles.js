import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  padding20: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.grayDark,
    marginBottom: 32,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  codeInput: {
    borderWidth: 1.5,
    borderColor: colors.greenPrimary,
    borderRadius: 10,
    width: 64,
    height: 64,
    textAlign: 'center',
    fontSize: 24,
    color: colors.black,
  },
  resendText: {
    textAlign: 'center',
    color: colors.greenPrimary,
    fontWeight: '600',
    marginBottom: 32,
  },
  continueButton: {
    backgroundColor: colors.greenPrimary,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
