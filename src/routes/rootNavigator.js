import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { View } from 'react-native';
import React from 'react';
import SplashScreen from '~/containers/SplashScreen/';
import Colors from '~/Theme/Colors';
// import BottomNavigator from './bottomTabNavigator';
import Calendar from '~/containers/Calendar';
import bottomTabNavigator from './bottomTabNavigator';

const configureStack = {
  initialRouteName: 'SplashScreen',
  headerMode: 'none',
  navigationOptions: {
    translucent: 'true',
    headerStyle: {
      backgroundColor: Colors.defaultBackground,
      elevation: 0,
      paddingTop: 40,
    },
    headerTitleStyle: {
      textAlign: 'center',
      // fontFamily: "Geomanist-Medium",
      alignSelf: 'center',
    },
    headerTintColor: Colors.headerTintColor,
  },
};

const RootNavigator = createStackNavigator(
  {
    SplashScreen,
    MainScreen: bottomTabNavigator,
  },
  configureStack,
);

/**
 * Configure App Container - for react-navigation 3+
 */
const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;
