/* eslint-disable max-len */
import React from 'react';
import T from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const VerticalDots = (props) => (
  <Svg width="4" height="16" viewBox="0 0 4 16" {...props}>
    <Path
      id="Path_2017"
      data-name="Path 2017"
      d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z"
      transform="translate(-10 -4)"
      fill="#a7b0c3"
    />
  </Svg>
);

VerticalDots.propTypes = {
  containerStyle: T.object,
};

export default VerticalDots;
