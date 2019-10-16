import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';
import {
  scaleHeight,
  isBigPhone,
  isSmallPhone,
} from '../../utils/scale';

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
    marginTop: isSmallPhone ? scaleHeight(22) : scaleHeight(65),
  },
  title: {
    fontSize: 24,
    color: colors.blueDark,
    textAlign: 'center',
  },
  textInfo: {
    fontSize: 14,
    marginTop: scaleHeight(16),
    color: colors.grayDark,
    textAlign: 'center',
  },
  image: {
    marginTop: isBigPhone ? 74 : 20,
    marginHorizontal: 24,
    width: dimensions.width - 58,
    resizeMode: 'contain',
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: 48,
    paddingVertical: 14,
    fontSize: 16,
    marginTop: isSmallPhone ? scaleHeight(32) : scaleHeight(52),
    marginBottom: scaleHeight(83),
  },
});

export default styles;
