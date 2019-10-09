import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../../../styles';
import { scaleHeight, scaleFontSize } from '../../../../utils';

const styles = StyleSheet.create({
  topTextContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: dimensions.height > 750 ? scaleHeight(65) : 20,
    marginBottom: scaleHeight(32),
  },
  title: {
    fontSize: scaleFontSize(24),
    color: colors.blueDark,
  },
  textInfo: {
    color: colors.grayDark,
    fontSize: scaleFontSize(14),
    textAlign: 'center',
    marginTop: scaleHeight(16),
  },
});

export default styles;
