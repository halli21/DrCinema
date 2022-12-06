import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';



const MovieDetails = ( {route,  navigation: {navigate} } ) => {
    const { id } = route.params;
    const movies = useSelector((state) => state.movies)
    const movie = movies.filter(movie => movie._id === id)[0]
    console.log(movie)

    return (
    <View style={styles.container} >
        <Text>{movie.name}</Text>
        <Text>{movie.name}</Text>
        <Text>{movie.name}</Text>
        <Text>{movie.name}</Text>

    </View>
)};

export default MovieDetails;