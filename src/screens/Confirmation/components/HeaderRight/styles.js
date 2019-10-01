import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    marginRight: 24,
  },
  billContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bill: {
    fontSize: 16,
    color: colors.white,
    marginRight: 5,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  likesCount: {
    fontSize: 16,
    color: colors.lightRed,
    marginRight: 1,
  },
  iconLike: {
    marginTop: 5,
  },
});

export default styles;
