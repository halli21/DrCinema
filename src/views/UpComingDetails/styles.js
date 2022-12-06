import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#5a0f1d'
    },
    text: { 
        color: 'white',
    },
    name: {
        color: 'white',
        fontSize: 40,
        marginTop: 20
    },
    release: {
        color: 'white',
        marginBottom: 10,
        fontStyle: 'italic'
    },
    description: {
        color: 'white',
        width: '90%',
        textAlign: 'center'
    },
    color: {
        color: 'white'
    },
    photo: {
        resizeMode: 'contain',
        height: 65,
        width: 60,
        backgroundColor: 'lightgrey'
    },
})