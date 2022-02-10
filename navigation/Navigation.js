import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform, Dimensions, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

//screens
import HomeScreen from '../screens/HomeScreen';
import AgentsScreen from '../screens/AgentsScreen';
import MapsScreen from '../screens/MapsScreen';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Agents' screenOptions={{
                tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' },
                tabBarItemStyle: { width: Dimensions.get('window').width / 3 },
                tabBarStyle: { backgroundColor: '#fa4454' },
                tabBarIndicatorStyle: { borderWidth: 2, borderColor: '#364966', height: 3 },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#042e27',
            }}>
                <Tab.Screen name="Agents" component={AgentsScreen} />
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Maps" component={MapsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation