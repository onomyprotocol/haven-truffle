import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
import { scaleHeight, scaleFontSize } from '../../../../utils';

const styles = StyleSheet.create({
  topTextContainer: {
    alignItems: 'center',
    marginTop: scaleHeight(29),
    marginBottom: scaleHeight(32),
    paddingHorizontal: 8,
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
