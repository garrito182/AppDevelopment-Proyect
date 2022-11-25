import * as React from 'react';
import { stylesIndex } from "./Styles";
import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LogIn() {

    return (
        <LinearGradient
            colors={["#1f306e", '#f5487f']}
            style={stylesIndex.containerMain}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "padding"}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <ScrollView>
                    <View style={stylesIndex.container}>
                        <Text>Log In</Text>
                    </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
};