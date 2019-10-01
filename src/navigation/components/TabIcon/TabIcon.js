import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import IconProfileTab from '../IconProfileTab/IconProfileTab';
import IconWalletTab from '../IconWalletTab/IconWalletTab';
import IconConfirmationTab from '../IconConfirmationTab/IconConfirmationTab';
import IconSettingsTab from '../IconSettingsTab/IconSettingsTab';
import s from './styles';

const TabIcon = ({ focused, iconName, label }) => (
  <View>
    {focused ? (
      <View style={s.labelContainer}>
        <View style={s.circle} />
        <Text style={s.label}>{label}</Text>
      </View>
    ) : (
      <Fragment>
        {
          {
            profile: <IconProfileTab />,
            wallet: <IconWalletTab />,
            confirmation: <IconConfirmationTab />,
            settings: <IconSettingsTab />,
          }[iconName]
        }
      </Fragment>
    )}
  </View>
);

TabIcon.propTypes = {
  focused: T.bool,
  iconName: T.string,
  label: T.string,
};

export default TabIcon;
