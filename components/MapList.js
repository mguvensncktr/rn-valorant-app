import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import MapItem from './MapItem'
import AppContext from '../context/AppContext';

const MapList = () => {

    const { maps } = useContext(AppContext);

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} style={{ marginBottom: 10 }}>
            {maps.map((map, index) => (
                <MapItem map={map} key={index} />
            ))}
        </ScrollView>
    )
}

export default MapList