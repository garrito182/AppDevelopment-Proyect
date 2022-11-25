import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LogIn from "./src/screens/LogIn/LogIn";
import TaskViewScreen from "./src/screens/TaskViewScreen/TaskViewScreen";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TaskViewScreen"
                component={TaskViewScreen}
                options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            style={{backgroundColor: '#e91e63'}}
            screenOptions={{headerShown: false,}}>
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-assistant" size={36} color="#EFD6AC" />
                    )
                }} />
            <Tab.Screen
                name="Log In"
                component={LogIn}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <Foundation name="torso" size={36} color="#EFD6AC" />
                    )
                }} />
        </Tab.Navigator>
    );
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
};