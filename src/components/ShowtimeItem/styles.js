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
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 10,
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
        alignSelf: 'center'
    },
    button: {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'grey',
        alignSelf: 'center'
    }
});