import React from 'react';
import { View, Image } from 'react-native';
import {
  HeaderTitle,
  BackButton,
  Text,
  Button,
} from '../../components';
import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import s from './styles';
import { NavigationService } from '../../services';
import { screenKey } from '../../constants';

const attention = require('../../../assets/attention.png');

function Attention() {
  return (
    <View style={s.container}>
      <View style={s.topTextContainer}>
        <Text semiBold style={s.title}>
          {t('attention.title')}
        </Text>
        <Text medium style={s.textInfo}>
          {t('attention.textInfo')}
        </Text>
      </View>
      <Image
        source={attention}
        style={s.image}
        resizeMethod="resize"
      />
      <Button
        title={t('attention.button')}
        containerStyle={s.containerButton}
        onPress={() =>
          NavigationService.navigateToRecoveryWords({
            screenKey: screenKey.ONBOARDING,
          })
        }
      />
    </View>
  );
}

Attention.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: <HeaderTitle textKey="attention.headerTitle" />,
};

export default Attention;
