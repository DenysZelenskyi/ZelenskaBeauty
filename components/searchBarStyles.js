import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grayLighter,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    width: '81%',
    marginBottom: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
