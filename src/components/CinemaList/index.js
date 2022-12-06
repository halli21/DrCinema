import React from 'react';
import { View, FlatList } from 'react-native';
import CinemaItem from '../CinemaItem';
import styles from './styles';
 

 const CinemaList = ({ cinemas, onPress }) => (
     <View style={styles.listContainer}>
         <FlatList 
                numColumns={1}
                data={cinemas}
                renderItem={({ item }) => (
                    <CinemaItem 
                        onPress={onPress}
                        {...item} />
                )}
                keyExtractor={cinema => cinema.id} />
     </View> 
 );


export default CinemaList;