import React from 'react';
import { Text, StyleSheet } from 'react-native';
import T from 'prop-types';

import { t } from '../../i18n';
import { colors } from '../../styles';

const s = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 16,
  },
});

function HeaderTitle({ textKey }) {
  return <Text style={s.text}>{t(textKey)}</Text>;
}

HeaderTitle.propTypes = {
  textKey: T.string.isRequired,
};

export default HeaderTitle;
