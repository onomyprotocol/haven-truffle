import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../styles';

const HEIGHT_TAB_BUTTON = 33;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 14,
    color: colors.grayDark,
  },
  buttonActiveText: {
    color: colors.blueDark,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: HEIGHT_TAB_BUTTON,
    borderRadius: HEIGHT_TAB_BUTTON / 2,
  },
  textContainerActive: {
    backgroundColor: colors.border,
  },
});
