import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Profile, {navigationOptions} from './pages/Profile';
import Repository, {repositoryOptions} from './pages/Repository';

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
      Repository: {
        screen: Repository,
        navigationOptions: repositoryOptions,
      },
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
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
