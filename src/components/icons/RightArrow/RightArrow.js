import React from 'react';
import T from 'prop-types';
import Svg, { G, Rect } from 'react-native-svg';

const RightArrow = ({ containerStyle }) => (
  <Svg
    style={containerStyle}
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <G id="arrow" transform="translate(-327 -104)">
      <G
        id="icons_chevron"
        data-name="icons/chevron"
        transform="translate(148 359) rotate(-90)"
      >
        <Rect
          id="bg"
          width="24"
          height="24"
          transform="translate(231 179)"
          fill="none"
        />
        <Rect
          id="line"
          width="8"
          height="2"
          rx="1"
          transform="translate(238.714 187.464) rotate(45)"
          fill="#a7b0c3"
        />
        <Rect
          id="line-2"
          data-name="line"
          width="8"
          height="2"
          rx="1"
          transform="translate(241.6 193.121) rotate(-45)"
          fill="#a7b0c3"
        />
      </G>
    </G>
  </Svg>
);

RightArrow.propTypes = {
  containerStyle: T.object,
};

export default RightArrow;
