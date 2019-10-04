import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { t } from '../../../../i18n';
import {
  Text,
  IconGrade,
  Avatar,
  Touchable,
} from '../../../../components';
import { RightArrow } from '../../../../components/icons';
import { NavigationService } from '../../../../services';
import s from './styles';

function ListItem({ index, avatar, userName, count }) {
  return (
    <Touchable
      onPress={() => NavigationService.navigateToUserConfirmations()}
      style={[s.container, index % 2 === 0 && s.background]}
    >
      <View style={s.userInfo}>
        <Avatar size={32} uri={avatar} />
        <Text semiBold style={s.userName}>
          {userName}
        </Text>
      </View>
      <View style={s.rightContainer}>
        <IconGrade />
        <View style={s.countContainer}>
          <Text bold style={s.countText}>
            {`${count} ${t('newConfirmations.badgeNew')}`}
          </Text>
        </View>
        <RightArrow />
      </View>
    </Touchable>
  );
}

ListItem.propTypes = {
  index: T.number,
  avatar: T.string,
  userName: T.string,
  count: T.number,
};

export default ListItem;
