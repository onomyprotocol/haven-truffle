import { dimensions } from '../styles';

export const isSmallPhone = dimensions.height < 650;

export const scaleHeight = (heightIphoneX) =>
  (100 / 812) * heightIphoneX * (dimensions.height / 100);

export const scaleWidth = (widthIphoneX) =>
  (100 / 375) * widthIphoneX * (dimensions.width / 100);

export const scaleFontSize = (fontSize) =>
  isSmallPhone ? fontSize - 2 : fontSize;
