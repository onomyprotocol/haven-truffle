import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../styles';
import { scaleWidth } from '../../../../../../utils';

const HEIGHT_BUTTON = 43;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT_BUTTON,
    borderRadius: HEIGHT_BUTTON / 2,
  },
  arrowTail: {
    width: HEIGHT_BUTTON,
    backgroundColor: colors.primary,
  },
  buttonText: {
    backgroundColor: colors.primary,
    paddingHorizontal: 25,
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
  buttonGray: {
    backgroundColor: colors.gray,
    width: HEIGHT_BUTTON,
    marginLeft: scaleWidth(21),
  },
  upArrow: {
    transform: [{ rotate: '180deg' }],
  },
});
