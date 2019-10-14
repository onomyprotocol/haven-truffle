import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
import {
  scaleFontSize,
  scaleHeight,
  isSmallPhone,
  isLargePhone,
} from '../../../../utils';

const styles = StyleSheet.create({
  header: {
    marginLeft: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: isSmallPhone || isLargePhone ? 10 : scaleHeight(65),
  },
  title: {
    fontSize: scaleFontSize(24, 4),
    color: colors.blueDark,
    textAlign: 'center',
  },
  textInfo: {
    fontSize: scaleFontSize(14),
    marginTop: scaleHeight(16),
    color: colors.grayDark,
    textAlign: 'center',
  },
});

export default styles;
