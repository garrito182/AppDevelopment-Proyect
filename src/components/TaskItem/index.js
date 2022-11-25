import * as React from 'react';
import { stylesTaskItem } from './styles';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TaskItem = ({ item, onHandleSelected }) => {

    const navigation = useNavigation();

    return (
        <View style={stylesTaskItem.listItemContainer}>
            <Text style={stylesTaskItem.listItem}>{item.value}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("TaskViewScreen")}>
                <Image style={stylesTaskItem.tinyInfo} source={require("./assets/img/icons8-information-64.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onHandleSelected(item)}>
                <Image style={stylesTaskItem.tinyTrash} source={require("./assets/img/icons8-trash-can-96.png")} />
            </TouchableOpacity>
        </View>
    )
};

export default TaskItem;