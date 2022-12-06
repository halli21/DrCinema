import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';



const MovieDetails = ( {route,  navigation: {navigate} } ) => {
    const { id, cinemaId } = route.params;
    const movies = useSelector((state) => state.movies)
    const movie = movies.filter(movie => movie._id === id)[0]

    let genres = movie.genres
    let genreString = '';
    for (let i = 0; i < genres.length; i++) {
        if (i === genres.length -1) {
            genreString += genres[i].Name
        } else {
            genreString += genres[i].Name + ' - '
        }
    }

    return (
    <View style={styles.container} >
        <Text>{movie.title}</Text>
        <Image
            style={styles.photo}
            source={{ uri: movie.poster }}
            resizeMode="fit" />
        <Text>{movie.plot}</Text>
        <Text>{movie.durationMinutes}</Text>
        <Text>{movie.year}</Text>
        <Text>{genreString}</Text>
    

    </View>
)};

export default MovieDetails;