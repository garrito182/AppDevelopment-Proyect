import * as React from 'react';
import { stylesModalItem } from "./styles";
import { View, Modal, Text, ImageBackground, } from 'react-native';

const ModalItem = ({ onHandleDeleteItem, modalVisible, onHandleCancel, selectedTask }) => {

    return (
        <View style={stylesModalItem.listContainer}>
            <Modal
                visible={!modalVisible}
                animationType='slide'>
                <View style={stylesModalItem.modalContainer}>
                    <ImageBackground
                        style={stylesModalItem.buttonWarning}
                        source={require("./assets/icon/icons8-error-60.png")}>
                    </ImageBackground>
                    <Text style={stylesModalItem.modalTitle}>Warning!</Text>
                    <View style={stylesModalItem.modalDetailContainer}>
                        <Text style={stylesModalItem.modalDetailText}>Are you sure you want to delete this task?</Text>
                    </View>
                    <View style={stylesModalItem.modalButtonContainer}>
                        <View
                            onPress={onHandleCancel}
                            style={stylesModalItem.listModalContainer}>
                            <Text
                                onPress={onHandleCancel}
                                style={stylesModalItem.modalPrevText}>Cancel
                                <ImageBackground
                                    style={stylesModalItem.buttonModal}
                                    source={require("./assets/icon/icons8-close-60.png")}>
                                </ImageBackground>
                            </Text>
                        </View>
                        <View style={stylesModalItem.listModalContainer}>
                            <Text
                                onPress={onHandleDeleteItem}
                                style={stylesModalItem.modalPrevText}>Delete
                                <ImageBackground
                                    onPress={onHandleDeleteItem}
                                    style={stylesModalItem.buttonModal}
                                    source={require("./assets/icon/icons8-trash-can-52.png")}>
                                </ImageBackground>
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
};

export default ModalItem;