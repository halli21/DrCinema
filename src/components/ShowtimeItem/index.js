import React from 'react';
import { TouchableOpacity, View, Text, Linking } from 'react-native';
import styles from './styles';

const ShowtimeItem = ({ time, purchase }) => {
    console.log('ShowtimeItem:  '+ time)
    return (
    <View style={ styles.wrapper }>
        <Text style={styles.text}>{time}</Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => Linking.canOpenURL(purchase).then(() => {Linking.openURL(purchase)})}>
            <Text>Purchase Ticket</Text>
        </TouchableOpacity>
    </View> 

)};

export default ShowtimeItem;