/* eslint-disable max-len */
import React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';

const UpArrowTail = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G
      id="icons_dark_back"
      dataName="icons/dark/back"
      transform="translate(74 -32) rotate(90)"
    >
      <Rect
        id="bg"
        width="24"
        height="24"
        transform="translate(32 50)"
        fill="none"
      />
      <G id="ico" transform="translate(-146 2)">
        <Path
          id="union"
          d="M1597.541-4.4l-5.879-5.88a.749.749,0,0,1-.362-.642.748.748,0,0,1,.1-.378.744.744,0,0,1,.128-.171.751.751,0,0,1,.078-.068l5.932-5.932a.751.751,0,0,1,1.061,0,.751.751,0,0,1,0,1.061l-4.739,4.738h12.688a.75.75,0,0,1,.75.751.75.75,0,0,1-.75.75h-12.66l4.711,4.711a.751.751,0,0,1,0,1.061.749.749,0,0,1-.531.219A.749.749,0,0,1,1597.541-4.4Z"
          transform="translate(-1408.3 70.92)"
          fill="#fff"
        />
      </G>
    </G>
  </Svg>
);

export default UpArrowTail;
