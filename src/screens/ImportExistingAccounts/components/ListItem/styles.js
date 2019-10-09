import { StyleSheet } from 'react-native';
import {
  scaleHeight,
  scaleFontSize,
  scaleWidth,
} from '../../../../utils';
import { colors } from '../../../../styles';

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scaleHeight(16),
    paddingHorizontal: 24,
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 24,
  },
  title: {
    color: colors.blueDark,
    fontSize: scaleFontSize(17),
  },
  fullName: {
    marginTop: scaleHeight(10),
    color: colors.grayDark,
    fontSize: scaleFontSize(14),
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: scaleWidth(8),
  },
});

export default s;
