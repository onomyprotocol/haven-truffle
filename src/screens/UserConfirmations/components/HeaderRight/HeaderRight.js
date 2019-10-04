import React from 'react';
import { View } from 'react-native';
import { Text, IconCoin, IconLike } from '../../../../components';
import s from './styles';

function HeaderRight() {
  return (
    <View style={s.container}>
      <View style={s.likes}>
        <Text bold style={s.likesCount}>
          1.5k
        </Text>
        <IconLike containerStyle={s.iconLike} />
      </View>
      <View style={s.billContainer}>
        <Text bold style={s.bill}>
          10&#39;000
        </Text>
        <IconCoin width={20} height={20} />
      </View>
    </View>
  );
}

export default HeaderRight;
