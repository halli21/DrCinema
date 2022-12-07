import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a0f1d'
    },
    text: { 
        color: 'white',
    },
    name: {
        color: 'white',
        fontSize: 40,
        marginTop: -150,
        marginBottom: 10,
        fontWeight: 'bold',
        alignSelf: 'left',
        marginLeft: 20
    },
    date: {
        color: 'white',
        fontSize: 40,
        marginTop: -15,
        fontStyle: 'italic',
        alignSelf: 'left',
        marginLeft: 20
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        borderTopWidth: 2,
        borderTopColor: 'white',
        width: '87%',
        marginTop: 20,
        marginBottom: 30,
        alignSelf: 'center'
    },
    release: {
        color: 'white',
        marginBottom: 10,
        fontStyle: 'italic'
    },
    description: {
        color: 'white',
        width: '90%',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 15
    },
    color: {
        color: 'white'
    },
    photo: {
        resizeMode: 'contain',
        width: '100%',
        height: 500,
        backgroundColor: 'lightgrey'
    },
    gradient: {
        height: 500,
        width: '100%',
        marginTop: -500
    },
    trailerText: {
        color: 'white',
        width: '90%',
        textAlign: 'center',
        marginBottom: 15
    }
})