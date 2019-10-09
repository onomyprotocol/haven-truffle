import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Empty } from '../components';
import screens from './screens';
import { CustomTabBar, TabIcon } from './components';
import TabConfirmations from './TabConfirmations';
import TabSettings from './TabSettings';
import { colors } from '../styles';

const routes = {
  [screens.Profile]: {
    screen: Empty,
    navigationOptions: {
      tabBarIcon: (props) => (
        <TabIcon iconName="profile" label="Accounts" {...props} />
      ),
      tabBarLabel: () => null,
    },
  },
  [screens.Wallet]: {
    screen: Empty,
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
  initialRouteName: screens.Confirmation,
  tabBarOptions: {
    style: {
      backgroundColor: colors.lighterGray,
      borderTopColor: 'transparent',
    },
  },
});
