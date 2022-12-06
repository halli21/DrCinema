import React from 'react';
import { View, FlatList } from 'react-native';
import MovieItem from '../MovieItem';
import styles from './styles';
 

 const MovieList = ({ onPress, movies }) => {
     return (
        <View style={styles.listContainer}>
            <FlatList 
               numColumns={1}
               data={movies}
               renderItem={({ item }) => (
                   <MovieItem 
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


export default MovieList;