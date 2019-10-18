import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { height, width } from '../../styles/dimensions';
import {
  scaleFontSize,
  scaleHeight,
  isSmallPhone,
} from '../../utils';

const BORDER_HEIGHT = 64;
const BORDER_WIDTH = 64;
const BORDER_SIZE = 10;
const BORDER_TOP_WIDTH = height / 2 - (!isSmallPhone ? 190 : 160);
const BORDER_BOTTOM_WIDTH = height / 2 - (!isSmallPhone ? 50 : 40);
const BORDER_HORIZONTAL = width / 2 - (!isSmallPhone ? 120 : 110);

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
  isScannedCode: {
    borderColor: colors.green,
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
    borderTopWidth: BORDER_TOP_WIDTH,
    borderBottomWidth: BORDER_BOTTOM_WIDTH,
    borderLeftWidth: BORDER_HORIZONTAL,
    borderRightWidth: BORDER_HORIZONTAL,
    borderColor: colors.cameraBackground,
    opacity: 0.96,
  },
  bottomContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    paddingHorizontal: 24,
    top: height / 2 + scaleHeight(60),
    opacity: 0.96,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: scaleFontSize(14),
    textAlign: 'center',
    color: colors.white,
    lineHeight: 20,
  },
  button: {
    height: !isSmallPhone ? 43 : 35,
    width: !isSmallPhone ? 154 : 130,
    borderRadius: 22,
    marginTop: scaleHeight(25),
  },
  cancelLink: {
    fontSize: 16,
    color: colors.primary,
    marginTop: scaleHeight(32),
  },
  top: {
    position: 'absolute',
    top: scaleHeight(35),
    alignSelf: 'center',
  },
  emojiRow: {
    fontSize: !isSmallPhone ? 48 : 28,
  },
});

export default s;
