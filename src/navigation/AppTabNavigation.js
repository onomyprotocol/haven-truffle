import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import screens from './screens';
import { CustomTabBar, TabIcon } from './components';
import TabConfirmations from './TabConfirmations';
import TabSettings from './TabSettings';
import TabAccounts from './TabAccounts';
import TabWallet from './TabWallet';
import { colors } from '../styles';

const routes = {
  [screens.Accounts]: {
    screen: TabAccounts,
    navigationOptions: {
      tabBarIcon: (props) => (
        <TabIcon iconName="profile" label="Accounts" {...props} />
      ),
      tabBarLabel: () => null,
    },
  },
  [screens.Wallet]: {
    screen: TabWallet,
    navigationOptions: {
      tabBarIcon: (props) => (
        <TabIcon iconName="wallet" label="Wallet" {...props} />
      ),
      tabBarLabel: () => null,
    },
  },
  [screens.Confirmation]: {
    screen: TabConfirmations,
    navigationOptions: {
      tabBarIcon: (props) => (
        <TabIcon
          iconName="confirmation"
          label="Confirmations"
          {...props}
        />
      ),
      tabBarLabel: () => null,
    },
  },
  [screens.Settings]: {
    screen: TabSettings,
    navigationOptions: {
      tabBarIcon: (props) => (
        <TabIcon iconName="settings" label="Settings" {...props} />
      ),
      tabBarLabel: () => null,
    },
  },
};

export default createBottomTabNavigator(routes, {
  headerMode: 'none',
  tabBarComponent: CustomTabBar,
  initialRouteName: screens.Wallet,
  tabBarOptions: {
    style: {
      backgroundColor: colors.lighterGray,
      borderTopColor: 'transparent',
    },
  },
});
