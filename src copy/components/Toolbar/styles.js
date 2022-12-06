import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        backgroundColor: 'white'
    },
    toolbarAction: {
        flex: 1,
        marginBottom: 20,
        alignItems: 'center',
        marginLeft: 100,
        marginRight: 100
    },
    toolbarActionText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16
    }
});