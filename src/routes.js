import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Profile, {navigationOptions} from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Users: {
        screen: Main,
        navigationOptions: () => ({
          title: 'Usuários',
        }),
      },
      Profile: {
        screen: Profile,
        navigationOptions,
      },
    },
    {
      headerTitleAlign: 'center',
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
