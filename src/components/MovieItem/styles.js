

import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        width: 400
    },
    wrapper: {
        marginTop: 15,
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 10,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'white',
        color: 'white',
        borderWidth: 2,
        borderRadius: 10,
        display: 'flex'
    },
    photo: {
        resizeMode: 'contain',
        height: 90,
        width: 70,
        backgroundColor: 'lightgrey',
        alignSelf: 'left',
        display: 'inline-block'
    },
    textContainer: {
        display: 'inline-block',
        width: '70%', 
        height: 70,
        marginLeft: 70,
        marginTop: -85,
        marginBottom: 25
    },
    genres: {
        textAlign: 'center'
    },
    title: {
        fontSize: 20
    }
});