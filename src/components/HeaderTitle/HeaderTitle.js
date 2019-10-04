import React from 'react';
import { Text } from 'react-native';
import T from 'prop-types';

import { t } from '../../i18n';
import s from './styles';

function HeaderTitle({ textKey }) {
  return <Text style={s.text}>{t(textKey)}</Text>;
}

HeaderTitle.propTypes = {
  textKey: T.string.isRequired,
};

export default HeaderTitle;
