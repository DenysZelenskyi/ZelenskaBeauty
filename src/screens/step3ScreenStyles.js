import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  stepper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
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
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 16,
  },
  cardImage: {
    flex: 1,
    // height: 160,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
    color: colors.black,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 24,
    color: colors.grayDark,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.grayMedium,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 14,
    color: colors.grayDark,
    marginBottom: 16,
    lineHeight: 20,
  },
  changeTimeButton: {
    position: 'absolute',
    bottom: 200,
    left: 100,
    right: 100,
    borderColor: colors.greenPrimary,
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  changeTimeText: {
    color: colors.greenPrimary,
    fontWeight: '600',
    fontSize: 14,
  },
  doneButton: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: colors.greenPrimary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  doneButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  descriptionConteiner: {
    paddingHorizontal: 20,
  },
});

export default styles;
