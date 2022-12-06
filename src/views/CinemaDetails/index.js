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


    let cinemaMovies = {};
    try{
        cinemaMovies = movies.filter(movie => movie.showtimes[0].cinema.id === id);
    }
    catch(err) {
        console.log(err,"this ting here")
    }

    let newDescription = description
    if (newDescription !== null) {
        for (let i=0; i<newDescription.length; i++) {
            if (newDescription.includes("<br>")) {
                newDescription = newDescription.replace("<br>", "");
            } else if (newDescription.includes("<b>")) {
                newDescription = newDescription.replace("<b>", "")
            } else {
                break
            }
        }
    }

    return (
        <View style={styles.container} >
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.website}>{website}</Text>
            <Text style={styles.description}>{newDescription}</Text>
            <Text style={styles.color}>{address}</Text>
            <Text style={styles.color}>{city}</Text>
            <Text style={styles.color}>{phone}</Text>
            <MovieList 
                onpress={{}}
                cinemaMovies={cinemaMovies}/>
        </View>
)};

export default CinemaDetails;