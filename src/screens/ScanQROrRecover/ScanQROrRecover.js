import React from 'react';
import { View, Image } from 'react-native';
import {
  HeaderTitle,
  Text,
  Button,
  Touchable,
} from '../../components';
import { t } from '../../i18n';
import { scanQROrRecover } from '../../assets/png';
import { colors } from '../../styles';
import s from './styles';

function ScanQROrRecover() {
  return (
    <View style={s.container}>
      <View style={s.topTextContainer}>
        <Text semiBold style={s.title}>
          {t('scanQROrRecover.title')}
        </Text>
        <Text medium style={s.textInfo}>
          {t('scanQROrRecover.topTextInfo')}
        </Text>
        <View style={s.bottomTextContainer}>
          <Text medium style={s.bottomTextInfo}>
            {t('scanQROrRecover.bottomTextInfo')}
          </Text>
          <Touchable>
            <Text semiBold style={s.recoverExistingAccounts}>
              {t('scanQROrRecover.recoverExistingAccounts')}
            </Text>
          </Touchable>
        </View>
      </View>
      <View style={s.bottomContainer}>
        <Image source={scanQROrRecover} style={s.image} />
        <Button
          title={t('scanQROrRecover.textButton')}
          containerStyle={s.containerButton}
        />
        <View style={s.imageBg} />
      </View>
    </View>
  );
}

ScanQROrRecover.navigationOptions = {
  tabBarVisible: false,
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitle: <HeaderTitle textKey="scanQROrRecover.headerTitle" />,
};

export default ScanQROrRecover;
