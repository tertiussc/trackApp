import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const TrackListScreen = ({ navigation }) => {
    return (
        <Spacer>
            <Text style={{ fontSize: 48, marginBottom: 20 }}>TrackListScreen</Text>
            <Button title="Go to track detail" onPress={() => navigation.navigate('TrackDetail')} />
        </Spacer>
    );
}

const styles = StyleSheet.create({

})

export default TrackListScreen;