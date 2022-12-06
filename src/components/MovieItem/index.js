import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

const MovieItem = ({ onPress, id, title, releaseYear, genres, poster }) => {
    let genreString = '';
    for (let i = 0; i < genres.length; i++) {
        if (i === genres.length -1) {
            genreString += genres[i].Name
        }else {
            genreString += genres[i].Name + ' - '
        }
    }
    return (
    <TouchableOpacity 
        onPress={() => onPress(id)}
        style={styles.container}>
        <View style={ styles.wrapper }>
            <Image 
                style={styles.photo}
                resizeMode="fit"
                source={{ uri: poster }}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text>{releaseYear}</Text>
            </View>
            <Text style={styles.genres}>{genreString}</Text>
            
        </View> 
    </TouchableOpacity>
)};

export default MovieItem;