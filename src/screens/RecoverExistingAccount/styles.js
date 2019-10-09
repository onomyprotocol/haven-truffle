import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { scaleHeight, scaleWidth } from '../../utils';

const styles = StyleSheet.create({
  header: {
    marginLeft: scaleWidth(24),
  },
  headerTitle: {
    fontSize: 14,
  },
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: scaleWidth(16),
    flex: 1,
  },
  topTextContainer: {
    alignItems: 'center',
    marginTop: scaleHeight(29),
    marginBottom: scaleHeight(32),
    paddingHorizontal: scaleWidth(8),
  },
  title: {
    fontSize: 24,
    color: colors.blueDark,
  },
  textInfo: {
    color: colors.grayDark,
    fontSize: 14,
    marginVertical: scaleHeight(24),
    marginLeft: scaleWidth(8),
  },
  item: {
    margin: 8,
  },
  bottomContainer: {
    marginHorizontal: scaleWidth(8),
    marginBottom: scaleHeight(32),
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: scaleWidth(48),
    paddingVertical: scaleHeight(14),
    fontSize: 16,
    marginTop: scaleHeight(52),
    marginBottom: scaleHeight(24),
  },
});

export default styles;
