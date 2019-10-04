import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
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
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: 48,
    paddingVertical: 14,
    marginBottom: 48,
  },
  leftHeader: {
    paddingLeft: 24,
  },
});

export default s;
