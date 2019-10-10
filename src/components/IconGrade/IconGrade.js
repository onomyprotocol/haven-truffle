/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Rect,
} from 'react-native-svg';

const colorType = {
  green: ['#00c983', '#006542'],
  blue: ['#4877c1', '#074789'],
};

const DEFAULT_SIZE = 24;

const IconGrade = ({
  containerStyle,
  color = 'blue',
  size = DEFAULT_SIZE,
}) => (
  <Svg
    style={containerStyle}
    id="logo_grad"
    data-name="logo grad"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1="0.5"
        x2="0.5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset="0" stopColor={colorType[color][0]} />
        <Stop offset="1" stopColor={colorType[color][1]} />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1="0.5"
        x2="0.5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset="0" stopColor="#fff" />
        <Stop offset="0.424" stopColor="#fcfcfd" />
        <Stop offset="1" stopColor="#d0d0db" />
      </LinearGradient>
    </Defs>
    <Path
      id="Path_8573"
      data-name="Path 8573"
      d="M117.627,121H100.373A3.377,3.377,0,0,1,97,117.627V100.373A3.377,3.377,0,0,1,100.373,97h17.255A3.377,3.377,0,0,1,121,100.373v17.255A3.377,3.377,0,0,1,117.627,121Z"
      transform="translate(-97 -97)"
      fill="url(#linear-gradient)"
    />
    <Rect
      id="Rectangle_1612"
      data-name="Rectangle 1612"
      width="2.502"
      height="11.31"
      transform="translate(8.298 6.345)"
      fill="url(#linear-gradient-2)"
    />
    <Path
      id="Path_8574"
      data-name="Path 8574"
      d="M262.376,225.4h-.361v7.576h2.424v-5.529A2.067,2.067,0,0,0,262.376,225.4Z"
      transform="translate(-248.73 -215.329)"
      fill="url(#linear-gradient-2)"
    />
  </Svg>
);

IconGrade.propTypes = {
  containerStyle: T.object,
  size: T.number,
  color: T.string,
};

export default IconGrade;
