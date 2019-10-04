import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 93,
    borderWidth: 0.1,
    borderColor: colors.grayDarker,
  },
  background: {
    backgroundColor: colors.lightGray,
  },
  iconGrade: {
    marginLeft: 24,
  },
  infoContainer: {
    paddingTop: 18,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 50,
  },
  dateTime: {
    fontSize: 12,
    color: colors.grayDark,
    paddingBottom: 4,
  },
  price: {
    color: colors.primary,
  },
  swipeButton: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  confirm: {
    backgroundColor: colors.green,
  },
  decline: {
    backgroundColor: colors.red,
  },
  description: {
    flexDirection: 'row',
    width: 261,
  },
  descriptionText: {
    fontSize: 16,
  },
  iconCoin: {
    marginTop: 4,
  },
});

export default styles;
