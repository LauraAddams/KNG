import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AddProductScreen from '../screens/AddProductScreen';
import CompareProductScreen from '../screens/CompareProductScreen';
import HomeScreen from '../screens/HomeScreen';
// import LogInScreen from '../screens/LogInScreen';
import ProductScreen from '../screens/ProductScreen';
import SearchProductScreen from '../screens/SearchProductScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TaggedIngScreen from '../screens/TaggedIngScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  TaggedIng: TaggedIngScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="ios-calendar"
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchProductScreen,
  Product: ProductScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="ios-search"
    />
  ),
};

const AddStack = createStackNavigator({
  Add: AddProductScreen,
});

AddStack.navigationOptions = {
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="ios-add"
    />
  ),
};

const CompareStack = createStackNavigator({
  Compare: CompareProductScreen,
});

CompareStack.navigationOptions = {
  tabBarLabel: 'Compare',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="ios-settings"
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SearchStack,
  AddStack,
  CompareStack,
});
