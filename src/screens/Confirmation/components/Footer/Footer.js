import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../../components';
import s from './styles';

function Footer() {
  return (
    <View style={s.container}>
      <Button
        containerStyle={s.declineAll}
        titleStyle={s.declineAllTitle}
        title="Decline all"
      />
      <Button containerStyle={s.confirmAll} title="Confirm all" />
    </View>
  );
}

export default Footer;
