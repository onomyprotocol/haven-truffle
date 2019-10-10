import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const SIZE_IMG_CONTAINER = 164;

const s = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  containerImg: {
    width: SIZE_IMG_CONTAINER,
    height: SIZE_IMG_CONTAINER,
    borderRadius: SIZE_IMG_CONTAINER / 2,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
  },
  containerLogo: {
    flex: 1,
    borderRadius: SIZE_IMG_CONTAINER / 2,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 24,
    fontSize: 14,
    color: colors.blueDark,
    marginTop: 32,
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default s;
