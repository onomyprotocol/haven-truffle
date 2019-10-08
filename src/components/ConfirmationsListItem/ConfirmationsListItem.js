import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { t } from '../../i18n';
import Text from '../Text/Text';
import IconGrade from '../IconGrade/IconGrade';
import Avatar from '../Avatar/Avatar';
import Touchable from '../Touchable/Touchable';
import { RightArrow } from '../icons';
import s from './styles';

function ConfirmationsListItem({
  type,
  index,
  avatar,
  userName,
  count,
  onPress,
}) {
  return (
    <Touchable
      onPress={onPress}
      style={[s.itemContainer, index % 2 === 0 && s.background]}
    >
      <View style={s.mainContainer}>
        <View style={s.userInfo}>
          <Avatar size={32} uri={avatar} />
          <Text semiBold style={s.userName}>
            {userName}
          </Text>
        </View>

        <View style={s.rightContainer}>
          <IconGrade />
          <View
            style={[
              s.countContainer,
              type === 'history' && s.historyCountContainer,
            ]}
          >
            <Text bold style={s.countText}>
              {`${count} ${
                type === 'history'
                  ? t('historyConfirmations.badgeTxs')
                  : t('newConfirmations.badgeNew')
              }`}
            </Text>
          </View>
        </View>
      </View>
      <RightArrow />
    </Touchable>
  );
}

ConfirmationsListItem.propTypes = {
  type: T.string,
  index: T.number,
  avatar: T.string,
  userName: T.string,
  count: T.number,
  onPress: T.func,
};

export default ConfirmationsListItem;
