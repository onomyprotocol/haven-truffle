import { StyleSheet } from 'react-native';
import { scaleHeight, scaleFontSize } from '../../../../utils/scale';

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    marginTop: scaleHeight(32),
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  bottomText: {
    textAlign: 'center',
  },
  containerButton: {
    alignSelf: 'center',
    borderRadius: 22,
    paddingHorizontal: 48,
    paddingVertical: 14,
    fontSize: scaleFontSize(16),
    marginTop: scaleHeight(24),
    marginBottom: scaleHeight(24),
  },
});

export default styles;
