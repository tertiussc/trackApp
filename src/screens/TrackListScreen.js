import React, { useContext } from 'react';
import { FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { NavigationEvents, navigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import { FontAwesome } from '@expo/vector-icons';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Spacer>
                <FlatList
                    data={state}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() =>
                            navigation.navigate('TrackDetail', { _id: item._id })
                        }>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    }}
                />
            </Spacer>
        </>
    );
}

TrackListScreen.navigationOptions = {
    title: 'My Tracks'
}

const styles = StyleSheet.create({

})

export default TrackListScreen;