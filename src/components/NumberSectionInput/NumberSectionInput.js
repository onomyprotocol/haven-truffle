import React, { useState } from 'react';
import T from 'prop-types';
import { View, ViewPropTypes, TextInput } from 'react-native';
import { t } from '../../i18n';
import Text from '../Text/Text';
import s from './styles';

function NumberSectionInput({ number, containerStyle }) {
  const [text, setText] = useState('');
  return (
    <View style={[s.container, containerStyle]}>
      <View style={s.containerNumber}>
        <Text medium style={s.textNumber}>
          {number}
        </Text>
      </View>
      <View style={s.containerInput}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={s.input}
          placeholder={t('common.enterWord')}
        />
      </View>
    </View>
  );
}

NumberSectionInput.propTypes = {
  number: T.string,
  containerStyle: ViewPropTypes.style,
};

export default NumberSectionInput;
