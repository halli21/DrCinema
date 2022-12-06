import React, { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../actions/moviesActions';
import styles from './styles';



const MovieDetails = ( {route,  navigation: {navigate} } ) => {
    const { id } = route.params;
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies)

    return (
        <View  >
            <Text>Hello</Text>
        </View>
)};

export default MovieDetails;