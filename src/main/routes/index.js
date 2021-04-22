import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Product from '../../features/products';
import Home from '../../features/home';

const {Navigator, Screen} = createDrawerNavigator();

const Routes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Products" component={Product} />
    </Navigator>
  );
};
export default Routes;
