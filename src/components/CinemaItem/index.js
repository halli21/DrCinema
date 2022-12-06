import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const CinemaItem = ({ onPress, id, name, website, description, address, city, phone }) => {

    return (
    <TouchableOpacity 
        onPress={() => onPress(id, name, website, description, address, city, phone)}
        style={styles.container}>

        <View style={ styles.wrapper }>
            <Text style={styles.name}>{name}</Text>
            <Text>{website}</Text>
        </View> 
    </TouchableOpacity>
)};

export default CinemaItem;