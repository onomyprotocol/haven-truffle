import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
import { scaleFontSize } from '../../../../utils/scale';

const CONTAINER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    height: CONTAINER_HEIGHT,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.blueDark,
    fontSize: scaleFontSize(16),
  },
});

export default styles;
