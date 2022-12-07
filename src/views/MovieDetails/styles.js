import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5a0f1d'
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
    title: {
        color: 'white',
        fontSize: 40,
        marginTop: -150,
        marginBottom: 10,
        fontWeight: 'bold',
        alignSelf: 'left',
        marginLeft: 20
    },
    year: {
        color: 'white',
        fontSize: 20,
        marginTop: -10,
        fontStyle: 'italic',
        alignSelf: 'left',
        marginLeft: 20
    },
    duration: {
        color: 'white',
        fontSize: 20,
        marginTop: -25,
        fontStyle: 'italic',
        alignSelf: 'right',
        marginLeft: 295
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        borderTopWidth: 2,
        borderTopColor: 'white',
        width: '87%',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center'
    },
    plot: {
        color: 'white',
        width: '90%',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 15,
        alignSelf: 'center'
    },
    genres: {
        color: 'white',
        alignSelf: 'center',
    }
});