import React from 'react';
import { View, FlatList } from 'react-native';
import UpComingPreview from '../UpComingPreview'
import styles from './styles'

const UpComingList = ({ onPress, upComingMovies }) => {
    return(
    <View style={styles.container} >
        <FlatList
            data={upComingMovies}
            renderItem={({ item }) => {
                return (
                <UpComingPreview 
                    onPress={onPress}
                    title={item.title}
                    poster={item.poster}
                    release={item["release-dateIS"]} />
            )}} />
    </View>
    )};

export default UpComingList;