import { StatusBar, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { isAndroid } from '../utils/detectDevice';

const iosStatusBarHeight = isIphoneX() ? 44 : 20;

const statusBarHeight = isAndroid
  ? StatusBar.currentHeight
  : iosStatusBarHeight;

const appBarHeight = Platform.OS === 'ios' ? 44 : 56;

const headerHeight = appBarHeight + statusBarHeight;

export default {
  iosStatusBarHeight,
  statusBarHeight,
  appBarHeight,
  headerHeight,
};
