import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const s = StyleSheet.create({
  itemContainer: {
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
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.6,
  },
  userName: {
    fontSize: 17,
    marginLeft: 16,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 0.4,
  },
  countContainer: {
    backgroundColor: colors.red,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
    marginLeft: 16,
  },
  historyCountContainer: {
    backgroundColor: colors.darkGray,
  },
  countText: {
    fontSize: 12,
    color: colors.white,
    textAlign: 'center',
  },
});

export default s;
