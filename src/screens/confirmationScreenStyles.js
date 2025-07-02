import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 64,
    color: colors.greenPrimary,
    marginBottom: 24,
    marginTop: '30%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.black,
  },
  messageBox: {
    backgroundColor: '#A4E6A4',
    borderRadius: 16,
    padding: 10,
    position: 'absolute',
    bottom: 150,
    left: 20,
    right: 30,
  },
  message: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 4,
  },
  backButton: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: colors.greenPrimary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
