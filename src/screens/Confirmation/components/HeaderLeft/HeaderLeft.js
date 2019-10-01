import React from 'react';
import { View, Image } from 'react-native';
import { Text, BackButton } from '../../../../components';
import s from './styles';

const avatar = require('../../../../../assets/avatar.png');

function HeaderLeft() {
  return (
    <View style={s.container}>
      <BackButton containerStyle={s.backButton} />
      <View style={s.userInfo}>
        <Image source={avatar} style={s.avatar} />
        <Text bold style={s.name}>
          Relictos1
        </Text>
      </View>
    </View>
  );
}

export default HeaderLeft;
