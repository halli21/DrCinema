import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const CinemaItem = ({ id, name, onPress }) => {

    return (
    <TouchableOpacity 
        onPress={() => onPress(id)}>

        <View style={ styles.wrapper }>
            <Text>{name}</Text>
        </View> 
    </TouchableOpacity>
)};

export default CinemaItem;