import {Dimensions, StyleSheet} from 'react-native';
import colors from '../styles/colors';

const SIDE_PADDING = 16;
const GAP = 12;
const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = (SCREEN_WIDTH - SIDE_PADDING * 2 - GAP) / NUM_COLUMNS;

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: CARD_WIDTH,
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 181,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    padding: 12,
    gap: 4,
    backgroundColor: colors.grayLight,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 16,
    color: '#222',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
});
