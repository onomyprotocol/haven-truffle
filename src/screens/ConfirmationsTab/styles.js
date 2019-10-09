import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: dimensions.headerHeight,
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingLeft: 24,
  },
  headerButtonsContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.6,
  },
  buttonActiveText: {
    opacity: 1,
  },
  buttonMarginLeft: {
    marginLeft: 29,
  },
});

export default styles;
