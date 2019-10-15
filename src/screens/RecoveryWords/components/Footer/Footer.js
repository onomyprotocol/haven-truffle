import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import T from 'prop-types';
import { Text, Button } from '../../../../components';
import { helperButtonPress, helperButtonText } from './helpers';
import { t } from '../../../../i18n';
import s from './styles';

function Footer({ navigation }) {
  const screenKey = navigation.getParam('screenKey', 'settings');

  return (
    <View style={s.bottomContainer}>
      <Text medium style={s.bottomText}>
        {t('recoveryWords.textBottom')}
      </Text>
      <Button
        title={helperButtonText(screenKey)}
        containerStyle={s.containerButton}
        onPress={helperButtonPress(screenKey)}
      />
    </View>
  );
}

Footer.propTypes = {
  navigation: T.object,
};

export default withNavigation(Footer);
