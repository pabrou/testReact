import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import ModalScreen from '../screens/ModalScreen'

export const BasicNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: HomeScreen }
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#fff',
        },
    }
});

export const TabStack = TabNavigator({
    FirstTab: { screen: BasicNavigator },
    SecondTab: { screen: BasicNavigator }
},{
    initialRouteName: 'FirstTab',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#ffffff',
      },
    }
});

export const RootStack = StackNavigator({
    TabStack: { screen: TabStack },
    ModalScreen: { screen: ModalScreen }
},{
    mode: 'modal',
    headerMode: 'none',
});
