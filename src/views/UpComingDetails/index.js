import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector  } from 'react-redux';
import styles from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';


const UpComingDetails = ( { route, navigation: {navigate} } ) => {
    const { title, poster, release, trailers, plot  } = route.params;
    const upComingMovies = useSelector(state => state.upComing)
    let trailer = false

    try {
        trailer = trailers.map(trailer => {return trailer.results[0].key})[0]
    }
    catch(err) {
        console.log("No trailer found")
    }
    

    
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
                {trailer
                ?
                <YoutubePlayer 
                    height={500}
                    width={350}
                    play={false}
                    videoId={trailer}/>
                :
                <Text style={styles.trailerText}>No trailer available</Text>}
            </View>
        </ScrollView>
)};

export default UpComingDetails;