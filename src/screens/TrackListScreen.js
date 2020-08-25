import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
            <Button title="go to track detail" onPress={() => navigation.navigate('TrackDetail')} />
            <Text style={{ height: 2 }} />
            <Button title="go to back to Singup" onPress={() => navigation.navigate('Signup')} />
        </>
    );
}

const styles = StyleSheet.create({

})

export default TrackListScreen;