import { StyleSheet } from 'react-native';
import { scaleWidth } from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
  },
  backButton: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    marginHorizontal: scaleWidth(16),
  },
});

export default styles;
