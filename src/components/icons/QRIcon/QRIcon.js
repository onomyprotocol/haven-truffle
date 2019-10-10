/* eslint-disable max-len */
import React from 'react';
import Svg, { Path, Defs, G, Rect } from 'react-native-svg';

const QRIcon = (props) => (
  <Svg
    width={161.575}
    height={126.04}
    viewBox="0 0 161.575 126.04"
    {...props}
  >
    <Defs>
      {/* <Filter
        id="Path_8717"
        x="0"
        y="0"
        width={161.575}
        height={126.04}
        filterUnits="userSpaceOnUse"
      >
        <FeOffset dy="4" input="SourceAlpha" />
        <FeGaussianBlur stdDeviation="8" result="blur" />
        <FeFlood floodColor="#08143b" floodOpacity={0.122} />
        <FeComposite operator="in" in2="blur" />
        <FeComposite in="SourceGraphic" />
      </Filter> */}
    </Defs>
    <G
      id="Component_2"
      dataName="Component 2"
      transform="translate(24 20)"
    >
      <G
        transform="matrix(1, 0, 0, 1, -24, -20)"
        filter="url(#Path_8717)"
      >
        <Path
          id="Path_8717-2"
          dataName="Path 8717"
          d="M39.017,0C58.9.354,68.607,12.687,71.218,16.411c0,0,3.826,6.821,10.148,10.261,1.83,1,2.788,1.78,6.839,1.78a14.706,14.706,0,0,0,7.882-2.75c6.449-4.149,9.476-2.932,9.476-2.932l8.012,16.246-8.012,16.929s-1.324-.143-9.2-3.864A20.654,20.654,0,0,0,88.205,49.8a13.828,13.828,0,0,0-6.993,1.835C75.65,54.081,70.285,62.971,70.285,62.971c-2.612,3.007-12.21,15.064-31.267,15.064S0,60.566,0,39.018,19.138-.354,39.017,0Z"
          transform="translate(24 20)"
          fill="#fff"
        />
      </G>
      <Path
        id="Path_8632"
        dataName="Path 8632"
        d="M32,0A32,32,0,1,1,0,32,32,32,0,0,1,32,0Z"
        transform="translate(7.434 7.022)"
        fill="#4877c1"
      />
      <G id="baseline-menu-24px" transform="translate(19.434 19.022)">
        <Path
          id="Path_2012"
          dataName="Path 2012"
          d="M0,0H40V40H0Z"
          fill="none"
        />
        <G id="noun_qr_1635947" transform="translate(-3.848 -2.848)">
          <Path
            id="Path_8581"
            dataName="Path 8581"
            d="M10,10v7.83h7.83V10Zm5.593,5.593H12.237V12.237h3.356Z"
            fill="#fff"
          />
          <Path
            id="Path_8582"
            dataName="Path 8582"
            d="M10,66.666V74.5h7.83V66.666Zm5.593,5.594H12.237V68.9h3.356Z"
            transform="translate(0 -37.649)"
            fill="#fff"
          />
          <Path
            id="Path_8583"
            dataName="Path 8583"
            d="M66.667,10v7.83H74.5V10Zm5.593,5.593H68.9V12.237H72.26Z"
            transform="translate(-37.65)"
            fill="#fff"
          />
          <Path
            id="Path_8584"
            dataName="Path 8584"
            d="M72.26,40v6.712H66.667v2.237H74.5V40Z"
            transform="translate(-37.65 -19.932)"
            fill="#fff"
          />
          <Path
            id="Path_8585"
            dataName="Path 8585"
            d="M66.667,73.334v5.593H68.9V75.571H72.26v3.356H74.5V73.334Z"
            transform="translate(-37.65 -42.079)"
            fill="#fff"
          />
          <Path
            id="Path_8586"
            dataName="Path 8586"
            d="M40,10v2.237h4.475V17.83h2.237V10Z"
            transform="translate(-19.932)"
            fill="#fff"
          />
          <Path
            id="Path_8587"
            dataName="Path 8587"
            d="M44.475,40v4.475H40v6.712h4.475V56.78h2.237V48.949H42.237V46.712h4.475V42.237h2.237v2.237h2.237V40Z"
            transform="translate(-19.932 -19.932)"
            fill="#fff"
          />
          <Rect
            id="Rectangle_1627"
            dataName="Rectangle 1627"
            width={2.237}
            height={3.356}
            transform="translate(20.068 33.492)"
            fill="#fff"
          />
          <Rect
            id="Rectangle_1628"
            dataName="Rectangle 1628"
            width={3.356}
            height={2.237}
            transform="translate(14.475 24.543)"
            fill="#fff"
          />
          <Path
            id="Path_8588"
            dataName="Path 8588"
            d="M20.068,23.333v5.593H10v6.712h2.237V31.164H22.305V23.333Z"
            transform="translate(0 -8.858)"
            fill="#fff"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export default QRIcon;
