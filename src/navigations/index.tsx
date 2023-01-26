import React, {type PropsWithChildren} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import HomePage from '../screens/HomePage/HomePage';
import DetailPage from '../screens/DetailPage/DetailPage';
import store from '../app/store';

const Stack = createNativeStackNavigator();

const Routes: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Group>
              <Stack.Screen
                name="Home"
                options={{
                  title: 'User List',
                  headerStyle: {backgroundColor: '#282c44'},
                  headerTintColor: '#fff',
                }}
                component={HomePage}
              />
              <Stack.Screen
                name="Detail"
                options={{
                  title: 'User Details',
                  headerStyle: {backgroundColor: '#282c44'},
                  headerTintColor: '#fff',
                }}
                component={DetailPage}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default Routes;
