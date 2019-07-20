import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import TabIcon from '~/components/TabIcon';
import Calendar from '~/containers/Calendar';
import Colors from '~/Theme/Colors';

const CalendarIcon = ({ tintColor }) => (
  <TabIcon name="home" tintColor={tintColor} />
);

const routeConfig = {
  headerMode: 'none',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: Colors.accentColor,
    inactiveTintColor: Colors.inactiveGreyColor,
    pressColor: Colors.lightGreyColor,
  },
};

export default createBottomTabNavigator(
  {
    CalendarScreen: {
      screen: Calendar,
      navigationOptions: {
        tabBarIcon: CalendarIcon,
      },
    },
  },
  routeConfig,
);
