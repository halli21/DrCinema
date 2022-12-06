import React, { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../actions/moviesActions';
import MovieList from '../../components/MovieList';
import styles from './styles';



const CinemaDetails = ( {route,  navigation: {navigate} } ) => {
    const { id, name, website, description, address, city, phone } = route.params;
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies)

    

    useEffect(() => {
        (async () => {
            dispatch(getMovies());
        })();
    }, []);


    const cinemaMovies = movies.filter(movie => movie.showtimes[0].cinema.id === id)
    console.log(cinemaMovies[0].showtimes)

    return (
        <View style={styles.container} >
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{website}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{address}</Text>
            <Text style={styles.text}>{city}</Text>
            <Text style={styles.text}>{phone}</Text>
            <MovieList />
        </View>
)};

export default CinemaDetails;