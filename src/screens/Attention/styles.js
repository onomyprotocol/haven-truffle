import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const styles = StyleSheet.create({
  header: {
    marginLeft: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  topTextContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    color: colors.blueDark,
  },
  textInfo: {
    marginTop: 16,
    color: colors.grayDark,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 14,
  },
  image: {
    width: dimensions.width,
    resizeMode: 'cover',
    height: dimensions.height / 2.2,
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: 48,
    paddingVertical: 14,
    fontSize: 16,
  },
});

export default styles;
