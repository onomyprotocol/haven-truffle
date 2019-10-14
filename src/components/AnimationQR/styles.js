import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import {
  scaleHeight,
  scaleFontSize,
  scaleWidth,
  isSmallPhone,
} from '../../utils';

const styles = StyleSheet.create({
  image: {
    width: '160%',
    height: '100%',
  },
  imageContainer: {
    position: 'absolute',
    bottom: scaleHeight(30),
    alignSelf: 'center',
  },
  imageBg: {
    height: 100,
    backgroundColor: colors.scanQROrRecover.imageBg,
  },
  arrow: {
    position: 'absolute',
    left: isSmallPhone ? scaleWidth(40) : scaleWidth(60),
    bottom: scaleHeight(70),
  },
  bottomText: {
    position: 'absolute',
    left: isSmallPhone ? scaleWidth(85) : scaleWidth(90),
    color: colors.greyMiddle,
    fontSize: scaleFontSize(14),
    bottom: isSmallPhone ? scaleHeight(100) : scaleHeight(95),
  },
});

export default styles;
