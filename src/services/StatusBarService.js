import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { isAndroid } from '../utils/detectDevice';
import { colors, dimensions } from '../styles';

class StatusBarService {
  constructor() {
    this._currentStyle = null;
  }

  get currentStyle() {
    return this._currentStyle;
  }

  setStyle(style = this._currentStyle) {
    // store the style
    this._currentStyle = style;

    // set the style
    StatusBar.setBarStyle(style, true);
  }

  setBackgroundColor(color, animation = true) {
    if (isAndroid) {
      StatusBar.setBackgroundColor(color, animation);
    }
  }

  init() {
    if (isAndroid) {
      this.setTranslucent();
      this.setTransparent();
      this.setLightContent();
      SafeAreaView.setStatusBarHeight(dimensions.statusBarHeight);
    } else {
      this.setLightContent();
    }

    this.setHidden(false);
  }

  setTranslucent = () => {
    if (isAndroid) StatusBar.setTranslucent(true);
  };

  setTransparent = () => {
    this.setBackgroundColor(colors.transparent, false);
  };

  setLightContent = () => {
    this.setStyle('light-content');
  };

  setDarkContent = () => {
    this.setStyle('dark-content');
  };

  setHidden = (hidden, animation) => {
    StatusBar.setHidden(hidden, animation);
  };
}

const statusBarService = new StatusBarService();

export default statusBarService;
