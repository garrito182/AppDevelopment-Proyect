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
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    paddingHorizontal: 2,
                    paddingTop: 5,
                    paddingBottom: 0,
                    backgroundColor: '#242E41',
                    position: 'absolute',
                    borderTopWidth: 4,
                    borderTopColor: '#8f3b76',
                },
            })}>
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ }) => (
                        <MaterialCommunityIcons
                            name="home-assistant"
                            size={36}
                            color="#8f3b76"
                            borderTopColor="EFD6AC"
                            style={{
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowColor: "#FDCEA8",
                                shadowOpacity: 0.15,
                                shadowRadius: 4,
                                elevation: 5
                            }} />
                    )
                }} />
            <Tab.Screen
                name="Log In"
                component={LogIn}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ }) => (
                        <Foundation
                            name="torso"
                            size={36}
                            color="#8f3b76"
                            style={{
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowColor: "#FDCEA8",
                                shadowOpacity: 0.1,
                                shadowRadius: 2,
                                elevation: 5
                            }} />
                    )
                }} />
        </ Tab.Navigator>
    );
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
};