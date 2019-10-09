import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import Touchable from '../Touchable';
import s from './styles';

const SwitchButton = ({ enabled, onChange }) => (
  <Touchable borderless onPress={onChange} hitSlop={20}>
    <View style={[s.root, s.buttonContainer]}>
      <View style={[s.statusLine, enabled && s.enabledLine]} />
      <View style={[s.button, enabled && s.enabledButton]} />
    </View>
  </Touchable>
);
SwitchButton.propTypes = {
  enabled: T.bool,
  onChange: T.func,
};
export default SwitchButton;
