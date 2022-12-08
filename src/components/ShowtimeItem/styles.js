import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    text: {
        color: 'black',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 3,
        fontSize: 15
    },
    container: {
        width: 400
    },
    wrapper: {
        width: '90%',
        marginTop: 15,
        marginBottom: 40,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: 'black',
        backgroundColor: 'white',
        color: 'white',
        borderWidth: 2,
        borderRadius: 10,
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',

    

    },
    button: {
        borderWidth: 2,
        borderColor: '#5a0f1d',
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#5a0f1d',
        alignSelf: 'center',
        marginLeft: 10
    },
    buttonText: {
        color: 'white',
    }
});