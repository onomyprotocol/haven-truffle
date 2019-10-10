import React from 'react';
import Svg, { G, Rect } from 'react-native-svg';

const DownArrow = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G
      id="icons_chevron"
      dataName="icons/chevron"
      transform="translate(-231 -179)"
    >
      <Rect
        id="bg"
        width={24}
        height={24}
        transform="translate(231 179)"
        fill="none"
      />
      <Rect
        id="line"
        width={8}
        height={2}
        rx="1"
        transform="translate(238.714 187.464) rotate(45)"
        fill="#a7b0c3"
      />
      <Rect
        id="line-2"
        dataName="line"
        width={8}
        height={2}
        rx="1"
        transform="translate(241.6 193.121) rotate(-45)"
        fill="#a7b0c3"
      />
    </G>
  </Svg>
);

export default DownArrow;
