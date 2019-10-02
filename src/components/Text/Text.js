import React from 'react';
import T from 'prop-types';
import { Text as Txt } from 'react-native';

const getFontFamily = (medium, bold, semiBold) => {
  let fontFamily = 'Gilroy-Regular';

  if (medium) fontFamily = 'Gilroy-Medium';
  if (bold) fontFamily = 'Gilroy-Bold';
  if (semiBold) fontFamily = 'Gilroy-SemiBold';

  return { fontFamily };
};

function Text({ children, medium, bold, semiBold, style }) {
  return (
    <Txt style={[getFontFamily(medium, bold, semiBold), style]}>
      {children}
    </Txt>
  );
}

Text.propTypes = {
  children: T.any,
  medium: T.bool,
  bold: T.bool,
  semiBold: T.bool,
  style: T.any,
};

export default Text;
