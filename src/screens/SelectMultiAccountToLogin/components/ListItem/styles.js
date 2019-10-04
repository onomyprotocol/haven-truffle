import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles';

const CHECK_SIZE = 32;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: colors.blueDark,
    fontSize: 17,
  },
  fullName: {
    marginTop: 10,
    color: colors.grayDark,
    fontSize: 14,
  },
  containerCheck: {
    height: CHECK_SIZE,
    width: CHECK_SIZE,
    borderRadius: CHECK_SIZE / 2,
    borderColor: colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    backgroundColor: colors.primary,
  },
});

export default s;
