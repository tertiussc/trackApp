import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>SignupScreen</Text>
            <Button title="Go to signin" onPress={() => navigation.navigate('Signin')} />
            <Text style={{ height: 2 }} />
            <Button title="Go to main flow" onPress={() => navigation.navigate('mainFlow')} />
        </>
    );
}

const styles = StyleSheet.create({

})

export default SignupScreen;