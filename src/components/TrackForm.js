import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
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
                ? <Button
                    buttonStyle={{ backgroundColor: 'red' }}
                    title=" Stop Recording" onPress={stopRecording}
                    titleStyle={{ marginLeft: 10 }}
                    icon={<Icon name="stop-circle" size={24} color="white" />}
                />
                : <Button
                    buttonStyle={{ backgroundColor: 'green' }}
                    title="Start Record"
                    titleStyle={{ marginLeft: 10 }}
                    onPress={startRecording}
                    icon={<Icon name="play-circle-o" size={24} color="white" />}
                />
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