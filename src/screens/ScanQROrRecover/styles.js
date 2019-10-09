import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const styles = StyleSheet.create({
  header: {
    marginLeft: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topTextContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 65,
  },
  title: {
    fontSize: 24,
    color: colors.blueDark,
    textAlign: 'center',
  },
  textInfo: {
    fontSize: 14,
    marginTop: 16,
    color: colors.grayDark,
    textAlign: 'center',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomTextInfo: {
    fontSize: 14,
    color: colors.grayDark,
    textAlign: 'center',
    marginRight: 5,
  },

  recoverExistingAccounts: {
    color: colors.primary,
    fontSize: 14,
  },
  image: {
    width: dimensions.width,
    height: dimensions.height / 2.2,
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: 48,
    paddingVertical: 14,
    fontSize: 16,
    marginTop: 52,
    position: 'absolute',
    bottom: 60,
  },
  containerBottomText: {
    alignSelf: 'center',
    padding: 15,
    marginTop: 16,
    marginBottom: 24,
  },
  takeMeBack: {
    color: colors.primary,
    fontSize: 16,
  },
  imageBg: {
    height: 30,
    backgroundColor: colors.scanQROrRecover.imageBg,
  },
});

export default styles;
