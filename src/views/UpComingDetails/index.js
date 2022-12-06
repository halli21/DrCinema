import React from 'react';
import { View, Text } from 'react-native';
import { useSelector  } from 'react-redux';
import styles from './styles';



const UpComingDetails = ( { navigation: {navigate} } ) => {
    const { id } = route.params;
    const upComingMovies = useSelector(state => state.upComing)

    
    return (
        <View style={styles.container}>
            
        </View>
)};

export default UpComingDetails;