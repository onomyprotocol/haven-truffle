import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';
import { scaleFontSize } from '../../../utils';

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginBottom: 6,
  },
  label: {
    fontSize: scaleFontSize(14),
    color: colors.primary,
  },
});

export default styles;
