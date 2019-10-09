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
import { firstAccount } from '../../assets/png';
import { colors } from '../../styles';
import s from './styles';

function FirstAccount() {
  return (
    <View style={s.container}>
      <View style={s.topTextContainer}>
        <Text semiBold style={s.title}>
          {t('firstAccount.title')}
        </Text>
        <Text medium style={s.textInfo}>
          {t('firstAccount.topTextInfo')}
        </Text>
      </View>
      <Image source={firstAccount} style={s.image} />
      <View style={s.bottomContainer}>
        <Text medium style={s.bottomTextInfo}>
          {t('firstAccount.bottomTextInfo')}
        </Text>
        <Button
          title={t('firstAccount.textButton')}
          containerStyle={s.containerButton}
        />
        <Touchable style={s.containerBottomText}>
          <Text semiBold style={s.textBottom}>
            {t('firstAccount.textBottom')}
          </Text>
        </Touchable>
      </View>
    </View>
  );
}

FirstAccount.navigationOptions = {
  tabBarVisible: false,
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: <HeaderTitle textKey="firstAccount.headerTitle" />,
};

export default FirstAccount;
