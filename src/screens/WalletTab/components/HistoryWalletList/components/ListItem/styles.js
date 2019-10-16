import { StyleSheet } from 'react-native';

import { colors } from '../../../../../../styles';
import { scaleWidth, scaleFontSize } from '../../../../../../utils';

const SIZE_ICON = 40;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  containerIcon: {
    width: SIZE_ICON,
    height: SIZE_ICON,
    borderRadius: SIZE_ICON / 2,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    flex: 1,
    marginLeft: scaleWidth(16),
  },
  containerTopText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: scaleFontSize(16),
    marginLeft: scaleWidth(7),
  },
  totalPrice: {
    fontSize: scaleFontSize(16),
    color: colors.primary,
    marginLeft: 14,
  },
  containerBottomText: {
    flex: 1,
  },
  text: {
    fontSize: scaleFontSize(14),
    color: colors.blueDark,
  },
});

export default s;
