import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import Icon from 'react-native-vector-icons/FontAwesome';



const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)
    console.log(locations.length)

    return (
        <Spacer>
            <Input
                value={name}
                label="Name of Track"
                placeholder="Enter a name"
                autoCapitalize='sentences'
                autoCorrect={false}
                onChangeText={changeName}
            />
            {recording
                ? <Button containerStyle={{ backgroundColor: "#dc143c", color: "#dc143c", }} title="Stop" onPress={stopRecording} />
                : <Button title="Start Record" onPress={startRecording} />
            }
        </Spacer>


    );
}

const styles = StyleSheet.create({
    buttonColor: {
        color: 'red',
        backgroundColor: 'rgba(255,0,0,1)'
    }
})

export default TrackForm;