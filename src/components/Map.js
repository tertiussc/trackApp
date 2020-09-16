import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'


const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    return (
        <MapView
            style={styles.map}
            region={{
                ...currentLocation.coords,
                // the delta is for the zoom on the map
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            showsUserLocation={true}
            followsUserLocation={true}
        >
            {/* <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(158, 158,255,1.0)"
                fillColor="rgba(158, 158,255,0.5)"
            /> */}
            < Polyline strokeWidth={2} coordinates={locations.map(loc => loc.coords)} />
        </MapView >
    );
}


const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;