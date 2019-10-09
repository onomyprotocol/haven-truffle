import React from 'react';
import { ViewPropTypes } from 'react-native';
import T from 'prop-types';

import Text from '../Text/Text';
import { t } from '../../i18n';
import s from './styles';

function HeaderTitle({ textKey, style }) {
  return (
    <Text semiBold style={[s.text, style]}>
      {t(textKey)}
    </Text>
  );
}

HeaderTitle.propTypes = {
  textKey: T.string.isRequired,
  style: ViewPropTypes.style,
};

export default HeaderTitle;
