import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../styles';

const HEIGHT_BUTTON = 43;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 25,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  containerText: {
    flex: 1,
  },
  topText: {
    color: colors.grayDark,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  containerBottomText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftText: {
    color: colors.blueDark,
    fontSize: 24,
  },
  rightText: {
    color: colors.greyMiddle,
    fontSize: 14,
    textTransform: 'uppercase',
    marginTop: 7,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT_BUTTON,
    borderRadius: HEIGHT_BUTTON / 2,
    paddingHorizontal: 25,
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});
