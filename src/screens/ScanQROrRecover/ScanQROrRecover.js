import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import {
  HeaderTitle,
  Text,
  Button,
  Touchable,
  BackButton,
} from '../../components';
import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import s from './styles';
import { screenKey } from '../../constants';
import { NavigationService } from '../../services';

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
          <Touchable
            style={s.link}
            borderless
            hitSlop={8}
            onPress={() =>
              NavigationService.navigateToRecoverExistingAccount({
                screenKey: screenKey.ONBOARDING,
              })
            }
          >
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
          onPress={() =>
            NavigationService.navigateToWelcomeOfficially()
          }
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
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: <HeaderTitle textKey="scanQROrRecover.headerTitle" />,
};

export default ScanQROrRecover;
