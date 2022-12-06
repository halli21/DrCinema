import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import CinemaList from '../../components/CinemaList';
import styles from './styles';

import dataService from '../../services/dataServices';

import { getNewToken } from '../../actions/dataActions';

import { getCinemas } from '../../actions/cinemasActions';



const Cinemas = ( { navigation: {navigate} } ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewToken());
        console.log('index.js', token)
        dispatch(getCinemas(token));
    }, [])

    const token = useSelector(state => state.newToken)





    return (
        <View style={ {flex: 1, alignItems: 'center' }}>
            <Text style={ { color:'black' } }>Cinemas</Text>
            <TouchableHighlight
                style={ styles.button }
                onPress={() => navigate('CinemaDetails')}>
                    <Text style={ styles.subButton }>Next</Text>
            </TouchableHighlight>
        </View>
)};

export default Cinemas;