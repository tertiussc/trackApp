import React, { useContext } from 'react';
import { FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { NavigationEvents, navigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)
    console.log(state)
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Spacer>
                <Text style={{ fontSize: 48, marginBottom: 20 }}>TrackListScreen</Text>
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

const styles = StyleSheet.create({

})

export default TrackListScreen;