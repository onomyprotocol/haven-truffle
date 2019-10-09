import React from 'react';
import { View, Text } from 'react-native';

import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import {
  Container,
  BackButton,
  HeaderTitle,
  Button,
  Avatar,
} from '../../components';
import s from './styles';

function WelcomeOfficially() {
  return (
    <Container style={s.container}>
      <View style={s.containerContent}>
        <View style={s.containerAvatar}>
          <Avatar size={144} />
        </View>
        <Text bold style={s.topText}>
          Relictos
        </Text>
        <Text style={s.fullName}>Michael Glazyrin</Text>
      </View>
      <View style={s.containerText}>
        <Text semiBold style={s.title}>
          {t('welcomeOfficially.title')}
        </Text>
        <Text medium style={s.textInfo}>
          {t('welcomeOfficially.textInfo')}
        </Text>
      </View>
      <Button
        title={t('welcomeOfficially.button')}
        containerStyle={s.containerButton}
      />
    </Container>
  );
}

WelcomeOfficially.navigationOptions = {
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.leftHeader} />,
  headerTitle: (
    <HeaderTitle textKey="welcomeOfficially.headerTitle" />
  ),
};

export default WelcomeOfficially;
