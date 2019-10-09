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
import { successfullyImported } from '../../assets/png';
import { headerStyle } from '../../styles';
import s from './styles';

function SuccessfullyImported() {
  return (
    <View style={s.container}>
      <View style={s.topTextContainer}>
        <Text semiBold style={s.title}>
          {t('successfullyImported.title')}
        </Text>
        <Text medium style={s.textInfo}>
          {t('successfullyImported.topTextInfo')}
        </Text>
        <Text bold style={s.textInfo}>
          {t('successfullyImported.bottomTextInfo')}
        </Text>
      </View>
      <Image source={successfullyImported} style={s.image} />
      <View>
        <Button
          title={t('successfullyImported.textButton')}
          containerStyle={s.containerButton}
        />
        <Touchable style={s.containerBottomText}>
          <Text semiBold style={s.takeMeBack}>
            {t('successfullyImported.textBottom')}
          </Text>
        </Touchable>
      </View>
    </View>
  );
}

SuccessfullyImported.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: (
    <HeaderTitle textKey="successfullyImported.headerTitle" />
  ),
};

export default SuccessfullyImported;
