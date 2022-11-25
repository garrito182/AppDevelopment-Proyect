import * as React from 'react';
import { stylesTaskView } from "./Styles";
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TaskViewScreen = ({ modalVisible, onHandleCancel, selectedTask }) => {

    return (
        <LinearGradient
            colors={["#1f306e", '#f5487f']}
            style={stylesTaskView.containerMain}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "padding"}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <View style={stylesTaskView.container}>
                    <Image style={stylesTaskView.tinyLogo} source={require("./assets/icon/my-task.png")} />
                        <Text>Task View</Text>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
};

export default TaskViewScreen;