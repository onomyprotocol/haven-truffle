import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { scaleHeight, scaleWidth } from '../../utils';

const WIDTH_NUMBER_CONTAINER = scaleWidth(43);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    flexDirection: 'row',
    flex: 1,
  },
  containerNumber: {
    paddingVertical: scaleHeight(14),
    width: WIDTH_NUMBER_CONTAINER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNumber: {
    color: colors.primary,
    fontSize: 16,
  },
  containerInput: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    fontFamily: 'Gilroy-Medium',
    flex: 1,
    paddingLeft: scaleWidth(16),
    fontSize: 14,
    color: colors.blueDark,
  },
});

export default styles;
