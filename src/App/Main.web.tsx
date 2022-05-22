import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Page from './Page';

const Main: React.FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Page">
        <Drawer.Screen name="Page" component={Page} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
