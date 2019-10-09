import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { scaleHeight, scaleFontSize } from '../../utils/scale';

const styles = StyleSheet.create({
  header: {
    marginLeft: 24,
  },
  container: {
    paddingHorizontal: 16,
  },
  topTextContainer: {
    alignItems: 'center',
    marginTop: scaleHeight(29),
    marginBottom: scaleHeight(32),
    paddingHorizontal: 8,
  },
  textInfo: {
    color: colors.grayDark,
    fontSize: scaleFontSize(14),
    marginVertical: scaleHeight(24),
    marginLeft: 8,
  },
  item: {
    margin: 8,
  },
  bottomContainer: {
    marginTop: scaleHeight(32),
    marginHorizontal: 8,
  },
  bottomText: {
    fontSize: scaleFontSize(14),
    color: colors.blueDark,
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: 48,
    paddingVertical: 14,
    fontSize: 16,
    marginTop: scaleHeight(52),
    marginBottom: scaleHeight(24),
  },
});

export default styles;
