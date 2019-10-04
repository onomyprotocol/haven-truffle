import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import {
  SwipeOut,
  IconCoin,
  IconGrade,
  ConfirmGrid,
  DeclineGrid,
  Text,
  Touchable,
} from '../../../../components';
import s from './styles';

function ListItem({ index }) {
  return (
    <SwipeOut
      renderLeftActions={() => (
        <Touchable
          onPress={() => {}}
          style={[s.swipeButton, s.confirm]}
        >
          <ConfirmGrid />
        </Touchable>
      )}
      renderRightActions={() => (
        <Touchable
          onPress={() => {}}
          style={[s.swipeButton, s.decline]}
        >
          <DeclineGrid />
        </Touchable>
      )}
      overshootLeft={false}
      overshootRight={false}
    >
      <View style={[s.container, index % 2 === 0 && s.background]}>
        <IconGrade containerStyle={s.iconGrade} />
        <View style={s.infoContainer}>
          <Text style={s.dateTime}>Today, 9:15 AM</Text>
          <View style={s.description}>
            <Text medium style={s.descriptionText}>
              Sending
            </Text>
            <Text bold> 100 </Text>
            <IconCoin containerStyle={s.iconCoin} />
            <Text medium style={s.price}>
              ($213)
            </Text>
            <Text medium> to Charles Dusek</Text>
          </View>
        </View>
      </View>
    </SwipeOut>
  );
}

ListItem.propTypes = {
  index: T.number,
};

export default ListItem;
