import * as React from 'react';
import { stylesListItem } from './styles';
import { View, FlatList, Text, Image } from 'react-native';
import { Divider } from "@react-native-material/core";

const TaskItem = ({ taskList, renderItem }) => {

    return (
        <>
            <Image style={stylesListItem.tinyLogo} source={require("./assets/img/my-task.png")} />
            <Divider style={stylesListItem.dividerLine} />
            <View style={stylesListItem.listContainer}>
                <Text style={stylesListItem.listTitle}></Text>
                <FlatList data={taskList} renderItem={renderItem} keyExtractor={item => item.id} />
            </View>
        </>
    )
}

export default TaskItem;