import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes, Image } from 'react-native';
import { Text, Avatar } from '../../../../../../../../components';
import s from './styles';

const crypto = require('../../../../../../../../../assets/crypto.png');

function ListItem({ uri, title, description, containerStyle }) {
  return (
    <View style={[s.container, containerStyle]}>
      {uri ? (
        <Avatar uri={uri} size={56} />
      ) : (
        <Image source={crypto} />
      )}
      <View style={s.containerText}>
        <Text medium semiBold style={s.title}>
          {title}
        </Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}

ListItem.propTypes = {
  title: T.string,
  description: T.string,
  uri: T.string,
  containerStyle: ViewPropTypes.style,
};

export default ListItem;
