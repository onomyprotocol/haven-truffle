import { getActiveChildNavigationOptions } from 'react-navigation';

export const defaultAppNavigationOptions = {
  navigationOptions: ({ navigation, screenProps }) => {
    const childOptions = getActiveChildNavigationOptions(
      navigation,
      screenProps,
    );
    return {
      tabBarVisible: childOptions.tabBarVisible,
    };
  },
};
