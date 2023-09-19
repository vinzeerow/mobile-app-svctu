import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from '../../screens/student/signUp/signup';
import LoginScreen from '../../screens/student/login/login';
import BottomTab from '../Tab/BottomTab';

var NavigationApp
const RootStack = createStackNavigator();

export default NavigationApp = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName='LOGIN'
                screenOptions={{
                    headerShown: false,
                    headerStyle: { backgroundColor: '#fff', height: 60 },
                    headerTintColor: '#02598C',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}>
                <RootStack.Screen name="LOGIN" component={LoginScreen}/>
                <RootStack.Screen name="SIGNUP" component={SignUpScreen}/>
                <RootStack.Screen name="HOME" component={BottomTab}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
};