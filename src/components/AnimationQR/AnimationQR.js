import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import Text from '../Text/Text';
import s from './styles';
import { t } from '../../i18n';
import { BigRedRightArrow } from '../icons';

const qrAnimation = require('../../animations/qr.json');

function AnimationQR() {
  return (
    <View>
      <View style={s.imageContainer}>
        <LottieView autoPlay source={qrAnimation} style={s.image} />
      </View>
      <View style={s.imageBg} />
      <Text medium style={s.bottomText}>
        {t('common.tapThereToScanQR')}
      </Text>
      <BigRedRightArrow style={s.arrow} />
    </View>
  );
}

export default AnimationQR;
