import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'


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
                ? <Button buttonStyle={{ backgroundColor: 'red' }} title="Stop Recording" onPress={stopRecording} />
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