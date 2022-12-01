import * as React from 'react';
import { stylesLogIn } from "./Styles";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Platform, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LogIn() {

    return (
        <LinearGradient
            colors={["#1f306e", '#f5487f']}
            style={stylesLogIn.containerMain}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "padding"}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <ScrollView>
                        <View style={stylesLogIn.container}>
                            <Image style={stylesLogIn.tinyLogo} source={require("../../assets/img/the-agenda.png")} />
                            <View style={stylesLogIn.inputContainer}>
                                <TextInput
                                    style={stylesLogIn.input}
                                    maxLength="30"
                                    placeholder=" Username"
                                    placeholderTextColor={"#919191"}>
                                </TextInput>
                                <TextInput
                                    style={stylesLogIn.input}
                                    maxLength="30"
                                    placeholder=" Password"
                                    placeholderTextColor={"#919191"}>
                                </TextInput>
                                <TouchableWithoutFeedback>
                                        <Text style={stylesLogIn.buttonLogIn}> Log-In</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
};