import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
        <ScrollView style={styles.container}>
            <Image style={styles.photo}
                    resizeMode="fit"
                    source={{ uri: poster }}/>
            <LinearGradient
                colors={['transparent', '#5a0f1d']}
                style={styles.gradient}/>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.date}>{release}</Text>
            <View style={styles.line}><Text style={styles.description}>{plot}</Text></View>
            <View style={{alignItems: 'center'}}>
                <YoutubePlayer 
                    height={500}
                    width={350}
                    play={false}
                    videoId={trailer}/>
            </View>
        </ScrollView>
)};

export default UpComingDetails;