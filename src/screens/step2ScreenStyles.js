import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  stepItem: {
    alignItems: 'center',
    flex: 1,
    marginTop: 24,
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.lightestGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircleActive: {
    backgroundColor: colors.greenPrimary,
  },
  stepCircleDone: {
    backgroundColor: colors.greenPrimary,
  },
  stepNumber: {
    color: colors.white,
    fontWeight: '600',
  },
  stepLabel: {
    marginTop: 4,
    fontSize: 12,
    color: colors.grayMedium,
  },
  stepLabelActive: {
    color: colors.black,
    fontWeight: '600',
  },
  stepLabelDone: {
    color: colors.greenPrimary,
    fontWeight: '600',
  },
  stepper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 32,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  timePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  mainTime: {
    backgroundColor: colors.greenPrimary,
    borderRadius: 100,
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideTime: {
    backgroundColor: '#C9F7C2',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.3,
  },
  timeText: {
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  confirmButton: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: colors.greenPrimary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default styles;
