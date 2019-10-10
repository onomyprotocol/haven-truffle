import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import {
  HeaderTitle,
  Text,
  Button,
  Touchable,
} from '../../components';
import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import s from './styles';

const qrAnimation = require('../../animations/qr.json');

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
        <Button
          title={t('scanQROrRecover.textButton')}
          containerStyle={s.containerButton}
        />
        <View style={s.imageContainer}>
          <LottieView autoPlay source={qrAnimation} style={s.image} />
        </View>
        <View style={s.imageBg} />
      </View>
    </View>
  );
}

ScanQROrRecover.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerTitle: <HeaderTitle textKey="scanQROrRecover.headerTitle" />,
};

export default ScanQROrRecover;
