import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onPress }) => (
    <View style={styles.toolbar}>
        <TouchableHighlight 
            style={styles.toolbarAction}
            onPress={onPress}>
            <Text style={styles.toolbarActionText}>See up coming movies!</Text>
        </TouchableHighlight>
    </View>
);


export default Toolbar;