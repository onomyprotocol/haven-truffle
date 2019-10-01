/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import Svg, { G, Circle, Path } from 'react-native-svg';

const DEFAULT_SIZE = 14.475;

const IconCoin = ({ containerStyle, width = DEFAULT_SIZE, height = DEFAULT_SIZE }) => (
  <Svg style={containerStyle}  width={width} height={height} viewBox="0 0 16 16">
    <G id="Group_1470" data-name="Group 1470" transform="translate(-9.562 -7.895)">
      <G id="Ellipse_74" data-name="Ellipse 74" transform="translate(9.562 7.895)" fill="#fff" stroke="#454b54" strokeWidth="2">
        <Circle cx="7.238" cy="7.238" r="7.238" stroke="none" />
        <Circle cx="7.238" cy="7.238" r="6.238" fill="none" />
      </G>
      <G id="Ellipse_75" data-name="Ellipse 75" transform="translate(10.768 9.101)" fill="none" stroke="#f8e390" strokeWidth="2.5">
        <Circle cx="6.031" cy="6.031" r="6.031" stroke="none" />
        <Circle cx="6.031" cy="6.031" r="4.781" fill="none" />
      </G>
      <Path id="Path_7955" data-name="Path 7955" d="M1.793,5.611a.877.877,0,0,1-.95-.775.421.421,0,1,0-.843,0A1.661,1.661,0,0,0,1.37,6.4v.454a.421.421,0,0,0,.843,0V6.4A1.661,1.661,0,0,0,3.586,4.836,1.714,1.714,0,0,0,1.793,3.219a.877.877,0,0,1-.95-.775.876.876,0,0,1,.948-.774h0a.877.877,0,0,1,.95.774.421.421,0,1,0,.843,0A1.661,1.661,0,0,0,2.213.877V.421a.421.421,0,0,0-.843,0V.877A1.661,1.661,0,0,0,0,2.444,1.714,1.714,0,0,0,1.793,4.062a.877.877,0,0,1,.95.774A.877.877,0,0,1,1.793,5.611Z" transform="matrix(0.996, -0.087, 0.087, 0.996, 14.548, 11.504)" fill="#505761" stroke="#4d545e" strokeWidth="0.3" />
    </G>
  </Svg>
);

IconCoin.propTypes = {
  containerStyle: T.object,
  width: T.number,
  height: T.number,
};

export default IconCoin;

