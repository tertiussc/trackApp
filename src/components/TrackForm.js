import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const TrackForm = () => {

    return (
        <Spacer>
            <Input
                label="Name of Track"
                placeholder="Enter a name"
                autoCapitalize='sentences'
                autoCorrect={false}
            />
            <Button title="Start Record" />
        </Spacer>


    );
}

const styles = StyleSheet.create({

})

export default TrackForm;