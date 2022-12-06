

import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const UpComingPreview = ({ onPress, title, poster, release, trailers, plot }) => {
    

    return (
        <TouchableOpacity onPress={() => onPress( title, poster, release, trailers, plot)}>
            <View style={styles.container}>

                <Image 
                    style={styles.photo}
                    resizeMode="fit"
                    source={{ uri: poster }}/>
                <View style={styles.textContainer}>  
                <Text
                    style={styles.name}
                    numberOfLines={1}>
                    {title}
                </Text>
                <Text
                    style={styles.name}
                    numberOfLines={1}>
                    {release}
                </Text>
                </View>  
            </View>
        </TouchableOpacity>
    )
    
    };

export default UpComingPreview;