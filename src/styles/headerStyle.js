import { Platform } from 'react-native';
import colors from './colors';

const androidConfig = {
  height: 56,
};

const headerStyle = {
  headerStyle: {
    ...(Platform.OS === 'ios' ? {} : androidConfig),
    backgroundColor: colors.primary,
  },
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    color: colors.white,
    alignSelf: 'center',
  },
  headerTintColor: colors.white,
};

export default headerStyle;
