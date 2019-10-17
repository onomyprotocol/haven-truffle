import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { HeaderTitle, BackButton } from '../../components';
// import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import s from './styles';

function QrScanner() {
  return (
    <View style={s.root}>
      <RNCamera
        style={s.root}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={(data) => {
          console.log('barcodes', data);
        }}
      />
      <View style={s.background}>
        <View style={s.opacityContainer}>
          <View style={s.maskContainer}>
            <View style={s.borderContainer}>
              <View style={[s.topBorder, s.leftBorder]} />
              <View style={[s.topBorder, s.rightBorder]} />
            </View>
            <View style={s.borderContainer}>
              <View style={[s.bottomBorder, s.leftBorder]} />
              <View style={[s.bottomBorder, s.rightBorder]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

QrScanner.navigationOptions = {
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.backButton} />,
  headerTitle: <HeaderTitle textKey="qrScanner.headerTitle" />,
};

export default QrScanner;
