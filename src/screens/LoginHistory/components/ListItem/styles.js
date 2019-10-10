import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles';
import {
  scaleWidth,
  scaleHeight,
  scaleFontSize,
} from '../../../../utils';

const SIZE_ONLINE_ICON = 16;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: scaleHeight(12),
  },
  containerIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  online: {
    position: 'absolute',
    height: SIZE_ONLINE_ICON,
    width: SIZE_ONLINE_ICON,
    backgroundColor: colors.primary,
    borderRadius: SIZE_ONLINE_ICON / 2,
    borderWidth: 2,
    borderColor: colors.white,
    bottom: 0,
    right: 0,
    zIndex: 5,
  },
  rightContainer: {
    flex: 1,
    marginLeft: scaleWidth(16),
  },
  containerText: {
    flex: 1,
    flexDirection: 'row',
  },
  topText: {
    color: colors.blueDark,
    fontSize: scaleFontSize(16),
  },
  topTextLeft: {
    marginRight: scaleWidth(16),
  },
  textDate: {
    color: colors.grayDark,
    fontSize: scaleFontSize(14),
    marginRight: scaleWidth(13),
  },
  connectStatus: {
    fontSize: scaleFontSize(14),
  },
  connectStatusGreen: {
    color: colors.green,
  },
  connectStatusRed: {
    color: colors.red,
  },
});

export default s;
