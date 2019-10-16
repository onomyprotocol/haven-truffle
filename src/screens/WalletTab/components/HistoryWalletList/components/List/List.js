import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import ListItem from '../ListItem/ListItem';
import { Text } from '../../../../../../components';
import s from './styles';

function List({ data }) {
  return (
    <View>
      {data.map(({ title, data: sectionData }) => (
        <View key={title}>
          <Text semiBold style={s.sectionItem}>
            {title}
          </Text>
          {sectionData.map((item) => (
            <ListItem
              key={item.id}
              price={item.price}
              totalPrice={item.totalPrice}
              text={item.text}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

List.propTypes = {
  data: T.array.isRequired,
};

export default List;
