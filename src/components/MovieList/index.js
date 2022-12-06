import React from 'react';
import { View, FlatList } from 'react-native';
import MovieItem from '../MovieItem';
import styles from './styles';
 

 const MovieList = ({ onPress, cinemaMovies }) => {
     console.log(cinemaMovies[0])
     return (
        <View style={styles.listContainer}>
            <FlatList 
               numColumns={1}
               data={cinemaMovies}
               renderItem={({ item }) => (
                   <MovieItem 
                       onPress={onPress}
                       id={item._id}
                       title={item.title}
                       releaseYear={item.year}
                       genres={item.genres}
                       poster={item.omdb[0].Poster}
                       />
               )} />
    </View> 
    )};


export default MovieList;