import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector  } from 'react-redux';
import styles from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';




const UpComingDetails = ( { route, navigation: {navigate} } ) => {
    const { title, poster, release, trailers, plot  } = route.params;
    const upComingMovies = useSelector(state => state.upComing)
    console.log('upComingDetails', trailers.map(trailer => {return trailer.results[0]}))
    const trailer = trailers.map(trailer => {return trailer.results[0].key})[0]
    console.log('trailer', trailer)

    
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{title}</Text>
            <Image style={styles.photo}
                    resizeMode="fit"
                    source={{ uri: poster }}/>
            <Text style={styles.name}>{release}</Text>
            <Text style={styles.description}>{plot}</Text>
            <YoutubePlayer 
                height={500}
                width={350}
                play={false}
                videoId={trailer}/>


        </View>
)};

export default UpComingDetails;