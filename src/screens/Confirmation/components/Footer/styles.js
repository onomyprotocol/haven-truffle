import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    height: 75,
    width: '100%',
    backgroundColor: colors.gray,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  declineAll: {
    height: 43,
    width: 163,
    backgroundColor: colors.transparent,
  },
  declineAllTitle: {
    color: colors.primary,
  },
  confirmAll: {
    height: 43,
    width: 163,
    borderRadius: 22,
  },
});

export default styles;
