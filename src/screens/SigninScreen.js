import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'

const SigninScreen = () => {
    const { state, signin } = useContext(Context)
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign into your account."
                errorMessage={state.errorMessage}
                submitButtonText="Sign in"
                onSubmit={signin}
            />
            <NavLink
                linkText="Don't have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    );
}

SigninScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}

const styles = StyleSheet.create({

})

export default SigninScreen;