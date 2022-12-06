import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const MovieItem = ({ onPress, id, name, website, description, address, city, phone }) => {

    return (
    <TouchableOpacity 
        onPress={() => onPress(id, name, website, description, address, city, phone)}
        style={styles.container}>

        <View style={ styles.wrapper }>
            <Text>{name}</Text>
            <Text>{website}</Text>
        </View> 
    </TouchableOpacity>
)};

export default MovieItem;