import React, { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import UpComingList from '../../components/UpComingList';
import { getUpComing } from '../../actions/upComingActions';
import Spinner from '../../components/Spinner';
import styles from './styles';



const UpComing = ( { navigation: {navigate} } ) => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector(state => state.upComing)

    const [loadingUpComing, setLoadingUpComing] = useState(true);


    useEffect(() => {
        (async () => {
            dispatch(getUpComing());   
     
        })();
    }, []);


    useEffect(() => {
        if (upComingMovies.length > 0) {
            setLoadingUpComing(false)
        }
    },[upComingMovies]);
    
    try {
        upComingMovies.sort(function(a, b) {
            const date1 = new Date(a["release-dateIS"])
            const date2 = new Date(b["release-dateIS"])
            return date1 - date2;
        })
    }
    catch(err) {
        console.log(err, "sorted ting error ye")
    }


    return (
        <View style={styles.container}>
            {
                loadingUpComing
                    ?
                    <Spinner />
                    :
                    <UpComingList 
                        onPress={( title, poster, release, trailers, plot) => navigate('Up coming movie details', { title: title, poster: poster, release: release, trailers: trailers, plot: plot})}
                        upComingMovies={upComingMovies}/>
            }
            
        </View>
)};

export default UpComing;