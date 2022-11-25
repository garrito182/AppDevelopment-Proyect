import { StyleSheet } from "react-native";

export const stylesListItem = StyleSheet.create({
    listContainer: {
        marginHorizontal: 23,
    },
    listTitle: {
        fontFamily: "Lato-Regular",
        textDecorationLine: "underline",
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#FDCEA8",
    },
    tinyLogo: {
        justifyContent: "center",
        alignContentAlign: "center",
        left: -125,
        top: 30,
        width: 150,
        marginBottom: 30,
        height: 50,
    },
    dividerLine: {
        marginTop: 8,
        justifyContent: "center",
        alignContentAlign: "center",
        width: 340,
        borderColor: "#8f3b76",
        borderWidth: 2,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "#FDCEA8",
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
    },
});