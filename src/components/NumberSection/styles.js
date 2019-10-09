import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { scaleHeight, scaleWidth } from '../../utils/scale';

const WIDTH_NUMBER_CONTAINER = scaleWidth(43);

const styles = StyleSheet.create({
  container: {
    paddingVertical: scaleHeight(14),
    backgroundColor: colors.lightGray,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    flexDirection: 'row',
    flex: 1,
  },
  containerNumber: {
    width: WIDTH_NUMBER_CONTAINER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNumber: {
    color: colors.primary,
    fontSize: 16,
  },
  containerText: {
    paddingLeft: 16,
  },
  text: {
    fontSize: 14,
    color: colors.blueDark,
  },
});

export default styles;
