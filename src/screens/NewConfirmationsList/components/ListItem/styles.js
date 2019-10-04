import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  background: {
    backgroundColor: colors.gray,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 17,
    marginLeft: 16,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countContainer: {
    backgroundColor: colors.red,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 12,
  },
  countText: {
    fontSize: 12,
    color: colors.white,
    textAlign: 'center',
  },
});

export default styles;
