import React from 'react';
import { View, FlatList } from 'react-native';
import CinemaItem from '../CinemaItem';
import styles from './styles';
 

 const CinemaList = ({ onPress, cinemas }) => {
     console.log(cinemas[0])
     //console.log(cinemas[0]["address/t"])
     return (
        <View style={styles.listContainer}>
            <FlatList 
               numColumns={1}
               data={cinemas}
               renderItem={({ item }) => (
                   <CinemaItem 
                       onPress={onPress}
                       id={item.id}
                       name={item.name}
                       website={item.website}
                       description={item.description}
                       address={item["address      "]}
                       city={item.city}
                       phone={item.phone}/>
               )} />
    </View> 
    )};


export default CinemaList;