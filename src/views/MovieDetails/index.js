import React, { useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import ShowtimeList from '../../components/ShowtimeList'

import styles from './styles';



const MovieDetails = ( {route,  navigation: {navigate} } ) => {
    const { id } = route.params;
    const movies = useSelector((state) => state.movies)
    const cinemaId = useSelector((state) => state.select.cinemaId)
    const movie = movies.filter(movie => movie._id === id)[0]

    const [showtimes, setShowtimes] = useState([])



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
            if (movie.showtimes[i].cinema.id == cinemaId) {
                let newList = [...showtimes];
                for (let j = 0; j < movie.showtimes[i].schedule.length; j++) {
                    newList = [...newList, {
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
    <ScrollView style={styles.container} >
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

        <Text style={styles.showTitle}>Showtimes:</Text>
        <ShowtimeList showtimes={showtimes} />
    
    </ScrollView>
)};

export default MovieDetails;