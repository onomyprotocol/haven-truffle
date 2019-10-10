import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import {
  HeaderTitle,
  Text,
  Button,
  Touchable,
} from '../../components';
import { t } from '../../i18n';
// import { scanQROrRecover } from '../../assets/png';
import { headerStyle } from '../../styles';
import s from './styles';

const backgroundImg = require('../../../assets/backgroundForQR.png');

const qrAnimation = require('../../animations/qr.json');

function ScanQROrRecover() {
  const animationRef = useRef();

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
        {/* <View style={s.imageBg} /> */}
      </View>
      <View style={{ backgroundColor: 'green' }}>
        <Image source={backgroundImg} style={s.image} />
        <LottieView
          autoPlay
          loop
          ref={animationRef}
          source={qrAnimation}
          style={{
            width: 60,
            height: 60,
          }}
        />
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
