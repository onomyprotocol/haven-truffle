import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const Plus = (props) => (
  <Svg
    id="baseline-menu-24px"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      id="Path_2012"
      data-name="Path 2012"
      d="M0,0H24V24H0Z"
      fill="none"
    />
    <Rect
      id="path"
      width="15.764"
      height="2.478"
      rx="1.239"
      transform="translate(4.1 10.65)"
      fill="#fff"
    />
    <Rect
      id="path-2"
      data-name="path"
      width="2.478"
      height="15.764"
      rx="1.239"
      transform="translate(10.65 4.1)"
      fill="#fff"
    />
  </Svg>
);

export default Plus;
