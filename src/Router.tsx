import React from 'react';
import {View} from 'react-native';

import AppNavigator from './navigation/index';

const Router = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default Router;
