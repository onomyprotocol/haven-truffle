import React from 'react';
import { View, Image } from 'react-native';
import T from 'prop-types';
import {
  HeaderTitle,
  BackButton,
  Text,
  Button,
  Touchable,
} from '../../components';
import { t } from '../../i18n';
import { headerStyle } from '../../styles';
import {
  helperTitleText,
  helperInfoText,
  helperButtonText,
  helperButtonPress,
} from './helpers';
import s from './styles';
import { NavigationService } from '../../services';

const areYouSure = require('../../../assets/areYouSure.png');

function AreYouSure({ navigation }) {
  const screenKey = navigation.getParam('screenKey', 'settings');

  return (
    <View style={s.container}>
      <View style={s.topTextContainer}>
        <Text semiBold style={s.title}>
          {helperTitleText(screenKey)}
        </Text>
        <Text bold style={s.textInfo}>
          {helperInfoText(screenKey)}
        </Text>
      </View>
      <Image source={areYouSure} style={s.image} />
      <View>
        <Button
          title={helperButtonText(screenKey)}
          containerStyle={s.containerButton}
          onPress={helperButtonPress(screenKey)}
        />
        <Touchable
          onPress={() => NavigationService.goBack()}
          style={s.containerBottomText}
        >
          <Text semiBold style={s.takeMeBack}>
            {t('areYouSure.textBottom')}
          </Text>
        </Touchable>
      </View>
    </View>
  );
}

AreYouSure.propTypes = {
  navigation: T.object,
};

AreYouSure.navigationOptions = {
  tabBarVisible: false,
  ...headerStyle,
  headerLeft: <BackButton containerStyle={s.header} />,
  headerTitle: <HeaderTitle textKey="areYouSure.headerTitle" />,
};

export default AreYouSure;
