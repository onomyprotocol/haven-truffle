import React from 'react';
import { View, Image } from 'react-native';
import {
  HeaderTitle,
  BackButton,
  Text,
  Button,
  Touchable,
} from '../../components';
import { t } from '../../i18n';
import { areYouSure } from '../../assets/png';
import { headerStyle } from '../../styles';
import s from './styles';

function AreYouSure() {
  return (
    <View style={s.container}>
      <View style={s.topTextContainer}>
        <Text semiBold style={s.title}>
          {t('areYouSure.title')}
        </Text>
        <Text bold style={s.textInfo}>
          {t('areYouSure.textInfo')}
        </Text>
      </View>
      <Image source={areYouSure} style={s.image} />
      <View>
        <Button
          title={t('areYouSure.textButton')}
          containerStyle={s.containerButton}
        />
        <Touchable style={s.containerBottomText}>
          <Text semiBold style={s.takeMeBack}>
            {t('areYouSure.textBottom')}
          </Text>
        </Touchable>
      </View>
    </View>
  );
}

AreYouSure.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: <HeaderTitle textKey="areYouSure.headerTitle" />,
};

export default AreYouSure;
