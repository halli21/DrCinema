import React from 'react';
import { View, FlatList } from 'react-native';
import ShowtimeItem from '../ShowtimeItem';
import styles from './styles';
 

 const ShowtimeList = ({ showtimes }) => {
    console.log("ShowtimeList: ", showtimes);
     return (
        <View style={styles.listContainer}>
            <FlatList 
               numColumns={1}
               data={showtimes}
               renderItem={({ item }) => (
                   <ShowtimeItem 
                       time={item.time}
    
                       />
               )} />
    </View> 
    )};


export default ShowtimeList;