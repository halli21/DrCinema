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
            /*upComingMovies.sort(function(a, b) {
                const date1 = new Date(a["release-dateIS"])
                const date2 = new Date(b["release-dateIS"])
                console.log(date1, "and", date2)
                console.log(date1 - date2)
                return date1 - date2;
             })*/

        })();
    }, []);

    upComingMovies.sort(function(a, b) {
        const date1 = new Date(a["release-dateIS"])
        const date2 = new Date(b["release-dateIS"])
        console.log(date1, "and", date2)
        console.log(date1 - date2)
        return date1 - date2;
     })

    return (
        <View style={styles.container}>
            <UpComingList upComingMovies={upComingMovies}/>
        </View>
)};

export default UpComing;