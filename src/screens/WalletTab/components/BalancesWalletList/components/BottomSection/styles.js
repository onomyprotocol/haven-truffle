import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../styles';

const HEIGHT_DOT = 12;

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    marginVertical: 25,
    color: colors.blueDark,
  },
  containerContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  PieChart: {
    position: 'absolute',
    zIndex: 1,
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: colors.white,
    left: 18,
  },
  containerText: {
    flex: 1,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  dot: {
    height: HEIGHT_DOT,
    width: HEIGHT_DOT,
    borderRadius: HEIGHT_DOT / 2,
    marginRight: 15,
  },
  colorGreen: {
    backgroundColor: colors.green,
  },
  colorRed: {
    backgroundColor: colors.red,
  },
  colorYellow: {
    backgroundColor: colors.yellow,
  },
  text: {
    fontSize: 14,
    flex: 1,
    color: colors.blueDark,
  },
  interest: {
    fontSize: 14,
    color: colors.blueDark,
  },
});
