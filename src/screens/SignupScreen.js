import React, { useContext, } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { color } from 'react-native-reanimated';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                linkText="Already have an account? Sign in instead"
            />
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}

const styles = StyleSheet.create({

})

export default SignupScreen;