import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import ShowtimeList from '../../components/ShowtimeList'

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
                    console.log('helloooo     '+ movie.showtimes[i].schedule[j])
                    let newList = [...showtimes, {
                        time: movie.showtimes[i].schedule[j].time,
                        purchase_url: movie.showtimes[i].schedule[j].purchase_url
                    }];
                    setShowtimes(newList)
                }
                break;
            }   
        }
    }



    return (
    <View style={styles.container} >
        <Text style={styles.text}>{movie.title}</Text>
        <Image
            style={styles.photo}
            source={{ uri: movie.poster }}
            resizeMode="fit" />
        <Text style={styles.text}>{movie.plot}</Text>
        <Text style={styles.text}>{movie.durationMinutes}</Text>
        <Text style={styles.text}>{movie.year}</Text>
        <Text style={styles.text}>{genreString}</Text>
        <ShowtimeList showtimes={showtimes}/>

    

    </View>
)};

export default MovieDetails;