import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';
import { scaleHeight, scaleFontSize } from '../../utils';

const styles = StyleSheet.create({
  header: {
    marginLeft: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topTextContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: dimensions.height > 750 ? scaleHeight(65) : 20,
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
    marginHorizontal: 14,
    marginTop: dimensions.height > 700 ? scaleHeight(55) : 20,
    width: dimensions.width - 24,
    height: dimensions.height / 3.5,
    resizeMode: 'contain',
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: 48,
    paddingVertical: 14,
    fontSize: 16,
    marginTop: scaleHeight(52),
  },
  containerBottomText: {
    alignSelf: 'center',
    padding: 15,
    marginTop: scaleHeight(16),
    marginBottom: scaleHeight(24),
  },
  takeMeBack: {
    color: colors.primary,
    fontSize: scaleFontSize(16),
  },
});

export default styles;
