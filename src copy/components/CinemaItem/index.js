import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const CinemaItem = ({ onPress, id, name, website }) => {

    return (
    <TouchableOpacity 
        onPress={() => onPress(id)}
        style={styles.container}>

        <View style={ styles.wrapper }>
            <Text>{name}</Text>
            <Text>{website}</Text>
        </View> 
    </TouchableOpacity>
)};

export default CinemaItem;