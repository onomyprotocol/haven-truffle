import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const s = StyleSheet.create({
  headerLeft: {
    paddingLeft: 24,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  containerAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 82,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  topText: {
    color: colors.blueDark,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 28,
  },
  fullName: {
    color: colors.grayDark,
    fontSize: 16,
    marginTop: 11,
  },
  leftHeader: {
    paddingLeft: 24,
  },
});

export default s;
