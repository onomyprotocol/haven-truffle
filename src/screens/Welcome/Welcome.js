import React from 'react';
import { View, Image } from 'react-native';
import { HeaderTitle, Text, Button } from '../../components';
import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import s from './styles';
import { NavigationService } from '../../services';

const onboardingWelcome = require('../../../assets/onboardingWelcome.png');

function Welcome() {
  return (
    <View style={s.container}>
      <View style={s.topTextContainer}>
        <Text semiBold style={s.title}>
          {t('welcome.title')}
        </Text>
        <Text medium style={s.textInfo}>
          {t('welcome.textInfo')}
        </Text>
      </View>
      <Image source={onboardingWelcome} style={s.image} />
      <Button
        onPress={() => NavigationService.navigateToScanQROrRecover()}
        title={t('welcome.textButton')}
        containerStyle={s.containerButton}
      />
    </View>
  );
}

Welcome.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerTitle: <HeaderTitle textKey="welcome.headerTitle" />,
};

export default Welcome;
