import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { scaleHeight, scaleFontSize } from '../../utils';

const s = StyleSheet.create({
  headerTitle: {
    fontSize: scaleFontSize(16),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: 48,
    paddingVertical: 14,
    marginBottom: scaleHeight(48),
  },
  leftHeader: {
    paddingLeft: 24,
  },
});

export default s;
