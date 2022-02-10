import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

const MapItem = ({ map, index }) => {

    const { maps } = useContext(AppContext);

    return (
        <View style={{ flex: 1, marginTop: 15 }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold' }}>{map.displayName}</Text>
                <Image source={{ uri: map.splash }} style={{ borderRadius: 20, width: 300, height: 300, resizeMode: 'cover' }} />
                <Text style={{ marginTop: 6, fontSize: 20, fontWeight: 'bold' }}>{map.coordinates}</Text>
            </View>
            {index == maps.length - 1 ? null : <View style={{ marginTop: 10, height: 3, backgroundColor: '#e0e0e0' }} />}
        </View>
    )
}

export default MapItem