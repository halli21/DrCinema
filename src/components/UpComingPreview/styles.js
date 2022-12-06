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
        width: 350
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
        width: 270,
        textAlign: 'center'
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    }
})