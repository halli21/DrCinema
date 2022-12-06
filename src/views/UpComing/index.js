import React, { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import UpComingList from '../../components/UpComingList';
import { getUpComing } from '../../actions/upComingActions';
import styles from './styles';



const UpComing = ( { navigation: {navigate} } ) => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector(state => state.upComing)

    useEffect(() => {
        (async () => {
            dispatch(getUpComing());

        })();
    }, []);

    return (
        <View style={styles.container}>
            <UpComingList upComingMovies={upComingMovies}/>
        </View>
)};

export default UpComing;