import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import {
  scaleHeight,
  scaleWidth,
  scaleFontSize,
} from '../../utils/scale';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
  },
  containerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(20),
  },
  containerAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 82,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  topText: {
    color: colors.blueDark,
    fontSize: scaleFontSize(20),
    marginTop: scaleHeight(28),
  },
  fullName: {
    color: colors.grayDark,
    fontSize: scaleFontSize(16),
    marginTop: scaleHeight(11),
  },
  containerText: {},
  title: {
    color: colors.blueDark,
    fontSize: scaleFontSize(24),
    textAlign: 'center',
  },
  textInfo: {
    color: colors.grayDark,
    fontSize: scaleFontSize(14),
    textAlign: 'center',
    marginTop: scaleHeight(16),
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: scaleWidth(48),
    paddingVertical: scaleHeight(14),
    marginBottom: scaleHeight(24),
  },
  leftHeader: {
    paddingLeft: scaleHeight(24),
  },
});

export default s;
