import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import TabIcon from '~/components/TabIcon';
import Calendar from '~/containers/Calendar';
import TodoList from '~/containers/TodoList';
import Colors from '~/Theme/Colors';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  switch (routeName) {
    case 'Calendar':
      iconName = 'calendar';
      break;

    case 'Goals':
      iconName = 'list';
      break;

    case 'Settings':
      iconName = 'settings';
      break;

    default:
      break;
  }

  return (
    <TabIcon name={iconName} tintColor={tintColor} type="SimpleLineIcon" />
  );
};

const routeConfig = {
  headerMode: 'none',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    showLabel: true,
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    pressColor: Colors.lightGreyColor,
  },
};

export default createBottomTabNavigator(
  {
    Calendar: {
      screen: Calendar,
      navigationOptions: {
        // tabBarIcon: CalendarIcon,
        label: 'Calendar',
      },
    },
    Goals: {
      screen: TodoList,
      navigationOptions: {
        // tabBarIcon: ListIcon,
      },
    },
    Settings: {
      screen: TodoList,
      navigationOptions: {
        // tabBarIcon: ListIcon,
      },
    },
  },
  routeConfig,
);
