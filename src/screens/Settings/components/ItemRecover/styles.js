import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
import { scaleFontSize } from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.blueDark,
    fontSize: scaleFontSize(16),
    width: '90%',
  },
});

export default styles;
