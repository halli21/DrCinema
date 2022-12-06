import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import UpComing from '../views/UpComing';
import UpComingDetails from '../views/UpComingDetails';
import MovieDetails from '../views/MovieDetails';




const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Cinemas'>
            <Stack.Screen name="Cinemas" component={Cinemas} />
            <Stack.Screen name="CinemaDetails" component={CinemaDetails} />
            <Stack.Screen name="UpComing" component={UpComing} />
            <Stack.Screen name="Up coming movie details" component={UpComingDetails} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;