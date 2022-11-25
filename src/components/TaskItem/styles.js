import { StyleSheet } from 'react-native';

export const stylesTaskItem = StyleSheet.create({
    listItemContainer: {
        fontFamily: "Lato-Regular",
        backgroundColor: "#242E41",
        borderRadius: 10,
        paddingVertical: 20,
        height: 70,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "#FDCEA8",
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 7,
        
    },
    listItem: {
        fontFamily: "Lato-Regular",
        color: "#EFD6AC",
        fontSize: 24,
        width: "85%",
        left: 10,
    },
    tinyInfo: {
        left: -20,
        width: 30,
        height: 30,
    },
    tinyTrash: {
        left: -20,
        width: 35,
        height: 30,
    },
});