import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

export const getThemedBookingStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? colors.black : colors.white,
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 24,
    },
    stepHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
      marginTop: 24,
    },
    stepItem: {
      alignItems: 'center',
      flex: 1,
    },
    stepCircle: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor:
        theme === 'dark' ? colors.greenLighter : colors.lightestGray,
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepCircleActive: {
      backgroundColor: colors.greenPrimary,
    },
    stepNumber: {
      color: colors.white,
      fontWeight: '600',
    },
    stepLabel: {
      marginTop: 4,
      fontSize: 12,
      color: theme === 'dark' ? colors.greenLighter : colors.grayMedium,
    },
    stepLabelActive: {
      color: theme === 'dark' ? colors.greenPrimary : colors.black,
      fontWeight: '600',
    },
    calendarContainer: {
      marginBottom: 24,
    },
    timeSlots: {
      paddingVertical: 10,
      gap: 10,
    },
    timeSlot: {
      backgroundColor: colors.greenLighter,
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 10,
      marginRight: 10,
      height: 40,
    },
    timeSlotActive: {
      backgroundColor: colors.greenPrimary,
    },
    timeSlotText: {
      fontWeight: '600',
      color: theme === 'dark' ? colors.white : colors.black,
    },
    continueButton: {
      position: 'absolute',
      bottom: 50,
      left: 20,
      right: 20,
      backgroundColor: colors.greenPrimary,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
    },
    continueButtonText: {
      color: colors.white,
      fontWeight: '600',
      fontSize: 16,
    },
  });
