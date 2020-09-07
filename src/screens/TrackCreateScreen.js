import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements'
import Map from '../components/Map'
import { SafeAreaView } from 'react-navigation'

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View>
                <Text h2>Create a track</Text>
                <Map />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen;