import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './Home';
import List from './List';
import Page from './Page';

const Drawer = createDrawerNavigator();

const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Page" component={Page} />
        <Drawer.Screen name="List" component={List} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
