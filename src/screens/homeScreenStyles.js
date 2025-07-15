import {StyleSheet} from 'react-native';

const homeScreenStyles = StyleSheet.create({
  menuTip: {
    position: 'absolute',
    left: 0, // tipAnim будет применяться отдельно
    top: 100,
    width: 30,
    height: 60,
    backgroundColor: '#007002',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});

export default homeScreenStyles;
