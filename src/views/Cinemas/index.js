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

    
    try {
        cinemas.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
    catch(err) {
        console.log(err,"this cinema ting and dat")
    }
    let newCinemas = []
    try{
        newCinemas = cinemas.map(c => {
            const parsed = {};
            // The property for 'address' included 4 spaces for some funky reason ( 'address    ' )
            Object.keys(c).forEach(key => parsed[key.trim()] = c[key]);
            return parsed;
      })
    }
    catch(err) {
        console.log(err,"this cinema ting and dat")
    }

    console.log('new', newCinemas)

    return (
        <View style={styles.container}>
            <CinemaList 
                onPress={(id, name, website, description, address, city, phone) => navigate('CinemaDetails', {id: id, name: name, website: website, description: description, address: address, city: city, phone: phone})}
                cinemas={newCinemas}/>
            <Toolbar onPress={() => navigate('UpComing')}/>
        </View>
)};

export default Cinemas;