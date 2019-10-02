import React from 'react';
import { SafeAreaView, ViewPropTypes } from 'react-native';
import T from 'prop-types';

function Container({ children, style }) {
  return <SafeAreaView style={[style]}>{children}</SafeAreaView>;
}

Container.propTypes = {
  children: T.node.isRequired,
  style: ViewPropTypes.style,
};

export default Container;
