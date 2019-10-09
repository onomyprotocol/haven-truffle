import { StatusBar, Platform, Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { isAndroid } from '../utils/detectDevice';

export const { width, height } = Dimensions.get('window');

export const indent = 16;
export const smallIndent = 12;
export const avatarSize = 56;

export const iosStatusBarHeight = isIphoneX() ? 44 : 20;

export const statusBarHeight = isAndroid
  ? StatusBar.currentHeight
  : iosStatusBarHeight;

export const appBarHeight = Platform.OS === 'ios' ? 44 : 56;

export const headerHeight = appBarHeight + statusBarHeight;
