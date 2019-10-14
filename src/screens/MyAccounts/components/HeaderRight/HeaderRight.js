import React from 'react';
import T from 'prop-types';
import { Touchable } from '../../../../components';
import { Plus } from '../../../../components/icons';
import s from './styles';

function HeaderRight({ onPress }) {
  return (
    <Touchable onPress={onPress} style={s.container}>
      <Plus />
    </Touchable>
  );
}

HeaderRight.propTypes = {
  onPress: T.func,
};

export default HeaderRight;
