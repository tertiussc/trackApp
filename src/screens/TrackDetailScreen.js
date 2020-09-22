import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext)
    const _id = navigation.getParam('_id')

    const track = state.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords
    return (
        <Spacer>
            <Text style={{ fontSize: 48 }}>{track.name}</Text>
            <MapView style={styles.map} initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }} >
                <Polyline strokeWidth={2} coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
        </Spacer>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackDetailScreen;