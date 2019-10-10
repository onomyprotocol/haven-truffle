import { StyleSheet } from 'react-native';
import { scaleHeight, scaleFontSize } from '../../../../utils';
import { colors } from '../../../../styles';

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.gray,
    paddingHorizontal: 24,
    paddingVertical: scaleHeight(16),
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: colors.blueDark,
    fontSize: scaleFontSize(17),
  },
});

export default s;
