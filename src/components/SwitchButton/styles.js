import { StyleSheet } from 'react-native';
import { dimensions, colors } from '../../styles';

const styles = StyleSheet.create({
  root: {
    height: dimensions.indent * 1.1,
    justifyContent: 'center',
  },
  statusLine: {
    width: dimensions.indent * 2,
    height: dimensions.indent * 0.8,
    borderRadius: 50,
    backgroundColor: colors.primary,
  },
  enabledLine: {
    backgroundColor: colors.primary,
  },
  enabledButton: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    right: 0,
  },
  button: {
    position: 'absolute',
    width: dimensions.indent * 1.1,
    height: dimensions.indent * 1.1,
    borderRadius: (dimensions.indent * 1.1) / 2,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
export default styles;
