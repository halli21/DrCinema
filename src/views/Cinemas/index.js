import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import Toolbar from '../../components/Toolbar';
import CinemaList from '../../components/CinemaList';
import styles from './styles';


import { getNewToken } from '../../actions/dataActions';

import { getCinemas } from '../../actions/cinemasActions';







const Cinemas = ( { navigation: {navigate} } ) => {
    const dispatch = useDispatch();
    const cinemas = useSelector(state => state.cinemas)




    


    useEffect(() => {
        (async () => {
            dispatch(getNewToken());
            dispatch(getCinemas());
        })();
    }, []);

    




    return (
        <View style={styles.container}>
            <CinemaList 
                onPress={(id, name, website, description, address, city, phone) => navigate('CinemaDetails',{id: id, name: name, website: website, description: description, address: address, city: city, phone: phone})}
                cinemas={cinemas}/>
            <Toolbar onPress={() => navigate('UpComing')}/>
        </View>
)};

export default Cinemas;