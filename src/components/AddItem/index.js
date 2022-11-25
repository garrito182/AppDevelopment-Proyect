import * as React from 'react';
import { stylesInput } from './styles';
import { View, TextInput, Button } from 'react-native';

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
    
    return (
        <View style={stylesInput.inputContainer}>
            <TextInput
                style={stylesInput.input}
                placeholder=" add task"
                placeholderTextColor={"#919191"}
                value={task}
                onChangeText={text => { onHandleChange(text) }}>
            </TextInput>
            <Button
                disabled={!task}
                title="  Add"
                color="#EFD6AC"
                onPress={onHandleTask}>
            </Button>
        </View>
    )
};

export default AddItem;