import React from 'react';
import { View, Image } from 'react-native';
import {
  HeaderTitle,
  Text,
  Button,
  Touchable,
} from '../../components';
import { t } from '../../i18n';
import { onboardingWelcome } from '../../assets/png';
import { headerStyle, dimensions } from '../../styles';
import s from './styles';

function Welcome() {
  console.log('dimensions', dimensions.height);
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
      <View style={s.containerBottom}>
        <Button
          title={t('welcome.textButton')}
          containerStyle={s.containerButton}
        />
        <Touchable style={s.containerBottomText}>
          <Text semiBold style={s.takeMeBack}>
            {t('welcome.textBottom')}
          </Text>
        </Touchable>
      </View>
    </View>
  );
}

Welcome.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerTitle: <HeaderTitle textKey="welcome.headerTitle" />,
};

export default Welcome;
