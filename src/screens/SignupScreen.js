import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { color } from 'react-native-reanimated';

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Spacer>
                <Text h4 style={styles.title}>Sign Up for Tracker</Text>
            </Spacer>
            <Input label="Email" />
            <Spacer />
            <Input label="Password" />
            <Spacer>
                <Button title="Sign Up" onPress={() => navigation.navigate('Signin')} />
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: 'dodgerblue'
    }
})

export default SignupScreen;