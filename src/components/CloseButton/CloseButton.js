/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import Touchable from '../Touchable';

function CloseButton({ onPress, containerStyle }) {
  return (
    <Touchable style={containerStyle} onPress={onPress}>
      <Svg xmlns="http://www.w3.org/2000/svg" width="22.17" height="22.17" viewBox="0 0 22.17 22.17">
        <Path id="union" d="M7.1,14.942V8.573H.735a.735.735,0,1,1,0-1.47H7.1V.734a.735.735,0,0,1,1.47,0V7.1h6.368a.735.735,0,1,1,0,1.47H8.573v6.368a.735.735,0,0,1-1.47,0Z" transform="translate(11.085 0) rotate(45)" fill="#a7b0c3" />
      </Svg>
    </Touchable>
  );
}

CloseButton.propTypes = {
  onPress: T.func,
  containerStyle: T.object,
};

export default CloseButton;
