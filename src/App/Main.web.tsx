import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Home from './Home';
import Page from './Page';

const Main: React.FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Page"
        screenOptions={({navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={navigation.toggleDrawer}
              style={{
                padding: 10,
              }}>
              <Text>🍔</Text>
            </TouchableOpacity>
          ),
        })}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Page" component={Page} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
