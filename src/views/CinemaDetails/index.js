import React, { useState, useEffect} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
//import { UpCircleOutlined } from '@ant-design/icons';
import { getMovies } from '../../actions/moviesActions';
import { selectCinema } from '../../actions/selectActions';
import MovieList from '../../components/MovieList';
import styles from './styles';



const CinemaDetails = ( {route,  navigation: {navigate} } ) => {
    const { id, name, website, description, address, city, phone } = route.params;
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies)

    let [infoDrop, setInfoDrop] = useState(true);
    

    useEffect(() => {
        (async () => {
            dispatch(getMovies());
            dispatch(selectCinema(id));
        })();
    }, []);


    let cinemaMovies = {};
    try{
        cinemaMovies = movies.filter(movie => movie.showtimes.map(cinemas => {return cinemas.cinema.id}).includes(id)); 
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

    const infoDropPress = () => {
        setInfoDrop(!infoDrop);
    }

    return (
        <View style={styles.container} > 
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.website}>{website}</Text>
            <Text style={infoDrop?styles.description : {display: 'none'}}>{newDescription}</Text>
            <Text style={infoDrop?styles.color : {display: 'none'}}>{address}</Text>
            <Text style={infoDrop?styles.color : {display: 'none'}}>{city}</Text>
            <Text style={infoDrop?styles.color : {display: 'none'}}>{phone}</Text>
            <TouchableHighlight 
                style={styles.infoDrop}
                onPress={() => infoDropPress()}>
                {infoDrop
                ?
                <AntDesign name="upcircleo" style={styles.infoDropText} />
                :
                <AntDesign name="downcircleo" style={styles.infoDropText} />}
            </TouchableHighlight>
            <MovieList 
                onPress={id => navigate('MovieDetails', {id: id})}
                cinemaMovies={cinemaMovies}/>
        </View>
)};

export default CinemaDetails;

//                <Text style={styles.infoDropText}>^</Text>
//<AntDesign name="uparrow" style={styles.infoDropText} />
//<UpCircleOutlined />
