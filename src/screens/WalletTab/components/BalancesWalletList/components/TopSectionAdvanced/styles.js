import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../styles';

export default StyleSheet.create({
  fillAll: {
    flex: 1,
  },
  container: {
    paddingVertical: 25,
  },
  containerTop: {
    flexDirection: 'row',
  },
  containerLeft: {
    flex: 1,
    paddingLeft: 24,
  },
  availableText: {
    flex: 1,
    fontSize: 12,
  },
  containerPrice: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  priceLeftText: {
    fontSize: 24,
    color: colors.blueDark,
  },
  priceRightText: {
    marginTop: 5,
    fontSize: 14,
  },
  containerRight: {
    flex: 1,
    paddingLeft: 24,
  },
  containerTopText: {
    flex: 1,
    flexDirection: 'row',
  },
  containerBottomText: {
    flex: 1,
    flexDirection: 'row',
  },
  numberText: {
    fontSize: 14,
    color: colors.blueDark,
  },
  rightText: {
    marginLeft: 8,
    marginTop: 2,
    fontSize: 12,
  },
  textGray: {
    textTransform: 'uppercase',
    color: colors.grayDark,
  },
});
