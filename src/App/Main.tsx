import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import Home from './Home';
import Page from './Page';

const Drawer = createDrawerNavigator();
const width = Dimensions.get('window').width;

const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            width: width,
          },
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Page" component={Page} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
