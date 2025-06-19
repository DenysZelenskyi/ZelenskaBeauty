import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  padding40: {
    paddingHorizontal: 40,
    flex: 1,
  },
  inner: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.grayDark,
    marginBottom: 24,
  },
  input: {
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 13,
    color: colors.grayDark,
  },
  linkText: {
    color: colors.greenPrimary,
    fontWeight: '600',
  },
  btn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default styles;
