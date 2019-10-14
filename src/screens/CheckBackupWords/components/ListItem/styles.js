import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles';

const s = StyleSheet.create({
  container: {
    paddingVertical: 14,
    backgroundColor: colors.lightGray,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    flexDirection: 'row',
    flex: 1,
    margin: 8,
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    color: colors.blueDark,
    fontSize: 14,
  },
  activeText: {
    color: colors.white,
  },
  activeBg: {
    backgroundColor: colors.blueDark,
  },
});

export default s;
