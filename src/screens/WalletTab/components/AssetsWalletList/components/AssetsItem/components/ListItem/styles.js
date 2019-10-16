import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../../styles';

const HEIGHT_ITEM = 88;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: HEIGHT_ITEM,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  containerText: {
    marginLeft: 24,
  },
  title: {
    fontSize: 17,
    color: colors.blueDark,
  },
  description: {
    fontSize: 14,
    color: colors.grayDark,
    marginTop: 10,
  },
});
