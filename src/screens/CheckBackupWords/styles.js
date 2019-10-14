import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { scaleHeight, scaleWidth } from '../../utils/scale';

const styles = StyleSheet.create({
  header: {
    marginLeft: 24,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  topTextContainer: {
    alignItems: 'center',
    marginTop: scaleHeight(69),
    marginBottom: scaleHeight(32),
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    color: colors.blueDark,
  },
  textInfoTop: {
    color: colors.grayDark,
    fontSize: 14,
    textAlign: 'center',
    marginTop: scaleHeight(16),
  },
  textInfoBottom: {
    color: colors.blueDark,
    fontSize: 14,
    textAlign: 'center',
  },
  item: {
    margin: 8,
  },
  bottomContainer: {
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: scaleHeight(50),
  },
  bottomText: {
    textAlign: 'center',
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: scaleWidth(48),
    paddingVertical: 14,
    fontSize: 16,
    marginTop: scaleHeight(24),
  },
});

export default styles;
