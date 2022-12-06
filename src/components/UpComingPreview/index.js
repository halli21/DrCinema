

import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const ContactPreview = ({ title, poster, release }) => {
    

    return (
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
    )
    
    };

export default ContactPreview;