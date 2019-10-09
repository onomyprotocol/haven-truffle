import { dimensions } from '../styles';

export const scaleHeight = (heightIphoneX) =>
  (100 / 812) * heightIphoneX * (dimensions.height / 100);

export const scaleWidth = (widthIphoneX) =>
  (100 / 375) * widthIphoneX * (dimensions.width / 100);

export const scaleFontSize = (fontSize) =>
  dimensions.height < 700 ? fontSize - 2 : fontSize;
