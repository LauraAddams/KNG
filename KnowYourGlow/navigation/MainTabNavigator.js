import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AddProductScreen from '../screens/AddProductScreen';
import CompareProductScreen from '../screens/CompareProductScreen';
import HomeScreen from '../screens/HomeScreen';
// import LogInScreen from '../screens/LogInScreen';
import ProductScreen from '../screens/ProductScreen';
import SearchProductScreen from '../screens/SearchProductScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TaggedIngScreen from '../screens/TaggedIngScreen';

import { appBackgroundColor, brandBlack } from '../constants/Colors';
import { font } from '../constants/Fonts';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  TaggedIng: TaggedIngScreen,
}, {
  navigationOptions: {
    headerTintColor: brandBlack,
    headerBackTitle: null,
    headerTitleStyle: font.navHeader,
    headerStyle: {
      backgroundColor: appBackgroundColor,
      borderBottomColor: 'transparent',
    },
  },
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      focused={focused}
      color={brandBlack}
      name="emoticon-happy"
      size={26}
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchProductScreen,
  Product: ProductScreen,
}, {
  navigationOptions: {
    headerTintColor: brandBlack,
    headerBackTitle: null,
    headerTitleStyle: font.navHeader,
    headerStyle: {
      backgroundColor: appBackgroundColor,
      borderBottomColor: 'transparent',
    },
  },
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      focused={focused}
      color={brandBlack}
      name="magnify"
      size={26}
    />
  ),
};

const AddStack = createStackNavigator({
  Add: AddProductScreen,
}, {
  navigationOptions: {
    headerTintColor: brandBlack,
    headerBackTitle: null,
    headerTitleStyle: font.navHeader,
    headerStyle: {
      backgroundColor: appBackgroundColor,
      borderBottomColor: 'transparent',
    },
  },
});

AddStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      focused={focused}
      color={brandBlack}
      name="plus"
      size={26}
    />
  ),
};

const CompareStack = createStackNavigator({
  Compare: CompareProductScreen,
}, {
  navigationOptions: {
    headerTintColor: brandBlack,
    headerBackTitle: null,
    headerTitleStyle: font.navHeader,
    headerStyle: {
      backgroundColor: appBackgroundColor,
      borderBottomColor: 'transparent',
    },
  },
});

CompareStack.navigationOptions = {
  tabBarLabel: 'Compare',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      focused={focused}
      color={brandBlack}
      name="checkbox-multiple-blank-circle-outline"
      size={26}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SearchStack,
  AddStack,
  CompareStack,
}, {
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: appBackgroundColor,
      borderTopColor: 'transparent',
    },
  },
});
