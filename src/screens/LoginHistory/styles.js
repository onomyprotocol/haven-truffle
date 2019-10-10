import { StyleSheet } from 'react-native';
import { scaleFontSize, isSmallPhone } from '../../utils';

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: scaleFontSize(17),
    paddingLeft: isSmallPhone ? 20 : 0,
  },
  leftHeader: {
    paddingLeft: 24,
  },
});

export default styles;
