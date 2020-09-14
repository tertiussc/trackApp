// import '../_mockLocation'
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'


const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext)
    const [err] = useLocation(isFocused, (location) => {
        addLocation(location, state.recording)
    })

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View>
                <Text h2>Create a track</Text>
                <Map />
                {err ? <Text>Please enable location services</Text> : null}
                <TrackForm />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen);