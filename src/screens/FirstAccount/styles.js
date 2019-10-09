import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';
import { scaleWidth, scaleHeight, scaleFontSize } from '../../utils';

const styles = StyleSheet.create({
  header: {
    marginLeft: 24,
  },
  container: {
    flex: 1,
  },
  topTextContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: scaleHeight(65),
  },
  title: {
    fontSize: scaleFontSize(24),
    color: colors.blueDark,
  },
  textInfo: {
    marginTop: scaleHeight(16),
    color: colors.grayDark,
    textAlign: 'center',
    fontSize: scaleFontSize(14),
  },
  image: {
    marginTop: scaleHeight(-40),
    width: dimensions.width,
    height: dimensions.height / 2.2,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  bottomTextInfo: {
    textAlign: 'center',
    color: colors.grayDark,
    fontSize: scaleFontSize(14),
    marginTop: scaleHeight(34),
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: scaleWidth(48),
    paddingVertical: scaleWidth(14),
    fontSize: 16,
    marginTop: scaleHeight(42),
  },
  containerBottomText: {
    alignSelf: 'center',
    padding: 15,
    marginTop: scaleHeight(16),
    marginBottom: scaleHeight(24),
  },
  textBottom: {
    color: colors.primary,
    fontSize: scaleFontSize(16),
  },
});

export default styles;
