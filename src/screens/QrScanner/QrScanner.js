/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, Fragment } from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useNavigationParam } from 'react-navigation-hooks';
import {
  HeaderTitle,
  BackButton,
  Text,
  Button,
  Touchable,
} from '../../components';
import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import s from './styles';
import { NavigationService } from '../../services';
import { screenKey } from '../../constants';

function QrScanner() {
  const [code, setCode] = useState(null);
  const confirmScreen = useNavigationParam('confirmScreen');

  function onBarCodeRead(data) {
    if (!code) {
      setCode(data);
    }
  }

  function onConfirm() {
    switch (confirmScreen) {
      case screenKey.WELCOME_OFFICIALLY:
        return NavigationService.navigateToWelcomeOfficially();

      // case screenKey.TEST:
      //   return NavigationService.naviteToTest();

      // case screenKey.TEST2:
      //   return NavigationService.naviteToTest2();

      default:
        return () => {};
    }
  }

  return (
    <View style={s.root}>
      <RNCamera
        style={s.root}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={({ data }) => onBarCodeRead(data)}
      />
      <View style={s.background}>
        <View style={s.opacityContainer}>
          <View style={s.maskContainer}>
            <View style={s.borderContainer}>
              <View
                style={[
                  s.topBorder,
                  s.leftBorder,
                  code && s.isScannedCode,
                ]}
              />
              <View
                style={[
                  s.topBorder,
                  s.rightBorder,
                  code && s.isScannedCode,
                ]}
              />
            </View>
            <View style={s.borderContainer}>
              <View
                style={[
                  s.bottomBorder,
                  s.leftBorder,
                  code && s.isScannedCode,
                ]}
              />
              <View
                style={[
                  s.bottomBorder,
                  s.rightBorder,
                  code && s.isScannedCode,
                ]}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={s.bottomContainer}>
        <Text medium style={s.descriptionText}>
          {code
            ? t('qrScanner.qrCodeScanned')
            : t('qrScanner.description')}
        </Text>
        {!code && (
          <Fragment>
            <Button
              onPress={() => onConfirm()}
              title={t('common.confirm')}
              containerStyle={s.button}
            />
            <Touchable onPress={() => setCode(null)}>
              <Text semiBold style={s.cancelLink}>
                {t('qrScanner.itDoesntMatch')}
              </Text>
            </Touchable>
          </Fragment>
        )}
      </View>
      {code && (
        <View style={s.top}>
          <Text style={s.emojiRow}>{`${`😭  😊  😒  😊`}`}</Text>
        </View>
      )}
    </View>
  );
}

QrScanner.navigationOptions = {
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.backButton} />,
  headerTitle: <HeaderTitle textKey="qrScanner.headerTitle" />,
};

export default QrScanner;
