import React from 'react';
import { View, Text } from 'react-native';

import { t } from '../../i18n';
import { defaultHeaderStyles } from '../../styles';
import {
  Container,
  BackButton,
  HeaderTitle,
  Button,
  Avatar,
} from '../../components';
import s from './styles';

function SelectAccountToLogin() {
  return (
    <Container style={s.container}>
      <View style={s.containerContent}>
        <View style={s.containerAvatar}>
          <Avatar size={144} />
        </View>
        <Text style={s.topText}>Relictos</Text>
        <Text style={s.fullName}>Michael Glazyrin</Text>
      </View>
      <Button
        title={t('common.login')}
        containerStyle={s.containerButton}
      />
    </Container>
  );
}

SelectAccountToLogin.navigationOptions = {
  ...defaultHeaderStyles,
  headerLeft: <BackButton containerStyle={s.leftHeader} />,
  headerTitle: <HeaderTitle textKey="SelectAccountToLogin.title" />,
};

export default SelectAccountToLogin;
