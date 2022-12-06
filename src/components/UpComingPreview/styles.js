import { StyleSheet} from "react-native";

export default StyleSheet.create({
    overlay: {
        height: 60,
        marginBottom: 10,
        borderRadius: 10,
    },
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 90,
    },
    photo: {
        resizeMode: 'contain',
        height: 65,
        width: 60,
        backgroundColor: 'lightgrey'
    },
    name: {
        fontSize: 18,
        paddingHorizontal: 20,
        marginRight: 40
    },
    textContainer: {
        alignItems: 'center',
    }
})