import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalendarIcon, GameIcon, HomeIcon, PersonIcon } from '../Icons/ExpoVectorIcons';
import ProfileScreen from '../../screens/student/profile/profile';
import HomeScreen from '../../screens/student/home/home';
import NotificationScreen from '../../screens/student/notification/notification';
import CalendarScreen from '../../screens/student/calendar/calendar';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName='HOME'
            screenOptions={{
                headerStyle: { backgroundColor: '#fff', height: 60 },
                headerTintColor: '#02598C',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontWeight: 'bold', },
                tabBarActiveTintColor: '#e91e63',
            }}>
            <Tab.Screen
                name="HOME"
                component={HomeScreen}
                options={{
                    headerTitle: "Trang chủ",
                    headerLeft: false,
                    // tabBarLabel: 'Home',
                    title: "",
                    tabBarIcon: () => (
                        <HomeIcon/>
                      ),
                }}
            />
            <Tab.Screen
                name="CALENDAR"
                component={CalendarScreen}
                options={{
                    headerTitle: "Lịch",
                    headerLeft: false,
                    // tabBarLabel: 'Calendar',
                    title: "",
                    tabBarIcon: () => (
                        <CalendarIcon/>
                      ),
                }}
            />
            <Tab.Screen
                name='NOTIFICATION'
                component={NotificationScreen}
                options={{
                    headerTitle: "Trò chơi",
                    headerLeft: false,
                    // tabBarLabel: 'Notification',
                    title: "",
                    tabBarIcon: () => (
                        <GameIcon/>
                    ),
                }}
            />
            
            <Tab.Screen
                name="PROFILE"
                component={ProfileScreen}
                options={{
                    headerTitle: "Hồ sơ",
                    headerLeft: false,
                    // tabBarLabel: 'Profile',
                    title: "",
                    tabBarIcon: () => (
                        <PersonIcon/>
                      ),
                }}
            />
        </Tab.Navigator>
    );
}