import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';



const MovieDetails = ( {route,  navigation: {navigate} } ) => {
    const { id } = route.params;
    const movies = useSelector((state) => state.movies)
    const cinemaId = useSelector((state) => state.select.cinemaId)
    const movie = movies.filter(movie => movie._id === id)[0]

    const [showtimes, setShowtimes] = useState([])


    console.log(movie.showtimes[0].schedule)

    let genres = movie.genres
    let genreString = '';
    for (let i = 0; i < genres.length; i++) {
        if (i === genres.length -1) {
            genreString += genres[i].Name
        } else {
            genreString += genres[i].Name + ' - '
        }
    }

    
    if (showtimes.length < 1){
        for (let i = 0; i < movie.showtimes.length; i++) {
            console.log(i)
            if (movie.showtimes[i].cinema.id == cinemaId) {

                for (let j = 0; j < movie.showtimes[i].schedule.length; j++) {
                    console.log(j+ '     '+ movie.showtimes[i].schedule[j])
                    setShowtimes([...showtimes, movie.showtimes[i].schedule[j]])
                }
                break;
            }   
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