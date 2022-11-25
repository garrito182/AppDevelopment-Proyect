import * as React from 'react';
import { useState } from 'react';
import { stylesIndex } from "./Styles";
import { View, Image, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { AddItem, TaskItem, ListItem, ModalItem } from "../../components";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
    const [loaded] = useFonts({
        'Lato-Regular': require("../../assets/fonts/Lato-Regular.ttf"),
        'Lato-Bold': require("../../assets/fonts/Lato-Bold.ttf"),
        'Lato-Italic': require("../../assets/fonts/Lato-Italic.ttf"),
    });

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const onHandleTask = () => {
        setTaskList((prevTaskList) => [...prevTaskList, { id: Math.random().toString(), value: task }]);
        setTask('');
    }

    const onHandleChange = (text) => setTask(text);

    const onHandleSelected = (item) => {
        setSelectedTask(item);
        setModalVisible(!modalVisible);
    }

    const renderItem = ({ item }) => (
        <TaskItem
            item={item}
            onHandleSelected={onHandleSelected}
        />
    )

    const onHandleCancel = () => {
        setModalVisible(!modalVisible);
    }

    const onHandleDeleteItem = () => {
        setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
        setModalVisible(!modalVisible);
    }

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
                            <Image style={stylesIndex.tinyLogo} source={require("../../assets/img/the-agenda.png")} />
                            <AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
                            <ListItem
                                taskList={taskList}
                                renderItem={renderItem}
                                keyExtractor={item => item.id} />
                            <ModalItem
                                modalVisible={!modalVisible}
                                onHandleCancel={onHandleCancel}
                                onHandleDeleteItem={onHandleDeleteItem}
                                selectedTask={onHandleSelected} />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
};