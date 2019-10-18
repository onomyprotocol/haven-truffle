import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../styles';

const HEIGHT_LABEL = 40;
const SIZE_LABEL_ARROW = 16;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
  },
  graph: {
    marginLeft: -62,
  },
  dot: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: colors.white,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: colors.primary,
    right: 18,
  },
  containerXLabel: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 10,
  },
  xLabelText: {
    fontSize: 10,
    color: colors.grayDark,
  },
  containerLabelPoint: {
    position: 'absolute',
    zIndex: 2,
    height: HEIGHT_LABEL,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 15,
    backgroundColor: colors.blueDark,
    right: 2,
  },
  labelPointText: {
    color: colors.white,
    fontSize: 14,
  },
  labelArrow: {
    position: 'absolute',
    zIndex: 3,
    height: SIZE_LABEL_ARROW,
    width: SIZE_LABEL_ARROW,
    backgroundColor: colors.blueDark,
    transform: [{ rotate: '45deg' }],
    bottom: -8,
    right: 14,
  },
});
