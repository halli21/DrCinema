import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

const ShowtimeItem = ({ time }) => {
    console.log('ShowtimeItem:  '+ time)
    return (
    <View style={ styles.wrapper }>
        <Text style={styles.text}>{time}</Text>
    </View> 

)};

export default ShowtimeItem;