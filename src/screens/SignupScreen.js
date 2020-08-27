import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { color } from 'react-native-reanimated';


const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h4 style={styles.title}>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer>
                <Button title="Sign Up" onPress={() => navigation.navigate('Signin')} />
            </Spacer>
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: 'dodgerblue'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
    }
})

export default SignupScreen;