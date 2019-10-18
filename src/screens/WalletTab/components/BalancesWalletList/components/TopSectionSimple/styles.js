import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../styles';

const HEIGHT_BUTTON = 43;

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 27,
  },
  topText: {
    fontSize: 16,
    color: colors.blueDark,
  },
  containerBottom: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  containerText: {
    flex: 1,
  },
  leftText: {
    fontSize: 20,
    color: colors.blueDark,
  },
  priceText: {
    color: colors.grayDark,
    fontSize: 14,
    marginTop: 6,
  },
  button: {
    height: HEIGHT_BUTTON,
    borderRadius: HEIGHT_BUTTON / 2,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSend: {
    backgroundColor: colors.primary,
  },
  buttonPurchase: {
    backgroundColor: colors.red,
    marginLeft: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});
