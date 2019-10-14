import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const CheckIcon = (props) => (
  <Svg
    id="baseline-done_all-24px"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    {...props}
  >
    <G
      id="baseline-done_all-24px-2"
      data-name="baseline-done_all-24px"
    >
      <Path
        id="Path_234"
        data-name="Path 234"
        d="M0,0H16V16H0Z"
        fill="none"
      />
      <Path
        id="Path_235"
        data-name="Path 235"
        d="M14.95,5.59,8.11,12.182l-2.7-2.6-.912.879L8.11,13.945l7.759-7.477Z"
        transform="translate(-2.114 -1.555)"
        fill="#fff"
        stroke="#fff"
        stroke-width={0.5}
      />
    </G>
  </Svg>
);

export default CheckIcon;
