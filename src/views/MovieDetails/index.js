import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
        <Image
            style={styles.photo}
            source={{ uri: movie.poster }}
            resizeMode="fit" />
        <LinearGradient
            colors={['transparent', '#5a0f1d']}
            style={styles.gradient}/>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
        <Text style={styles.duration}>{movie.durationMinutes} min.</Text>
        <View style={styles.line}><Text style={styles.plot}>{movie.plot}</Text></View>
        <Text style={styles.genres}>{genreString}</Text>
    

    </View>
)};

export default MovieDetails;