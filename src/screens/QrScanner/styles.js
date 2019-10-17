import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { height, width } from '../../styles/dimensions';

const BORDER_HEIGHT = 64;
const BORDER_WIDTH = 64;
const BORDER_SIZE = 10;

const s = StyleSheet.create({
  root: {
    flex: 1,
  },
  backButton: {
    paddingLeft: 24,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maskContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: -13,
    marginHorizontal: -13,
  },
  borderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBorder: {
    borderColor: colors.primary,
    borderTopWidth: BORDER_SIZE,
    width: BORDER_HEIGHT,
    height: BORDER_WIDTH,
  },
  bottomBorder: {
    borderColor: colors.primary,
    borderBottomWidth: BORDER_SIZE,
    width: BORDER_HEIGHT,
    height: BORDER_WIDTH,
  },
  leftBorder: {
    borderLeftWidth: BORDER_SIZE,
  },
  rightBorder: {
    borderRightWidth: BORDER_SIZE,
  },
  opacityContainer: {
    height,
    width,
    borderTopWidth: height / 2 - 130,
    borderBottomWidth: height / 2 - 110,
    borderLeftWidth: width / 2 - 120,
    borderRightWidth: width / 2 - 120,
    borderColor: colors.cameraBackground,
    opacity: 0.96,
  },
});

export default s;
