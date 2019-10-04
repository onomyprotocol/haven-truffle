import React from 'react';
import { Image } from 'react-native';
import T from 'prop-types';

const defaultUserAvatar = require('../../../assets/avatar.png');

const defaultSize = 56;

function Avatar({ size = defaultSize, uri, style }) {
  return (
    <Image
      source={uri ? { uri } : defaultUserAvatar}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        ...style,
      }}
    />
  );
}

Avatar.propTypes = {
  uri: T.string,
  size: T.number,
  style: T.any,
};

export default Avatar;
