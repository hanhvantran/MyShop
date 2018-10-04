/** @format */

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import { name as appName } from './app.json';
import ManHinhA from './components/ManHinhA';
import ManHinhB from './components/ManHinhB';
import {
    createStackNavigator,
  }  from 'react-navigation';
  const Index = createStackNavigator({
    ManHinhA: { screen: ManHinhA },
    ManHinhB: { screen: ManHinhB },
  });

AppRegistry.registerComponent(appName, () => Index);
