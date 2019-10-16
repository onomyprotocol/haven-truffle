import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { Text, IconCoin } from '../../../../../../components';
import { Wallet } from '../../../../../../components/icons';
import s from './styles';

function ListItem({ icon = Wallet, price, totalPrice, text }) {
  return (
    <View style={s.container}>
      <View style={s.containerIcon}>{icon()}</View>
      <View style={s.containerText}>
        <View style={s.containerTopText}>
          <IconCoin />
          <Text bold style={s.price}>
            {price}
          </Text>
          <Text medium style={s.totalPrice}>
            {totalPrice}
          </Text>
        </View>
        <View style={s.containerBottomText}>
          <Text style={s.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
}

ListItem.propTypes = {
  icon: T.node,
  price: T.string,
  totalPrice: T.string,
  text: T.string,
};

export default ListItem;
