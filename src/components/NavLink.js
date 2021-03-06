import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, linkText, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.textLink}>{linkText}</Text>
            </Spacer>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textLink: {
        fontSize: 16,
        color: 'dodgerblue'
    }
})

export default withNavigation(NavLink);