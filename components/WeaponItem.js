import { View, Text, Image } from 'react-native'
import React from 'react'

const WeaponItem = ({ weapon, index }) => {


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>{weapon.displayName}</Text>
                <Image source={{ uri: weapon.displayIcon }} style={{ width: 200, height: 100, resizeMode: 'contain' }} />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{weapon.displayName} Skins</Text>
                {weapon.skins.map((skin, index) => (
                    <View key={index} style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                        <Image source={{ uri: skin.displayIcon }} style={{ width: 120, height: 100, resizeMode: 'contain' }} />
                        <Text style={{ color: '#326432', fontSize: 20, marginLeft: 10 }}>{skin.displayName}</Text>
                    </View>
                ))}
            </View>
            <View style={{ height: 1, backgroundColor: 'gray', marginHorizontal: 25 }} />
        </View>
    )
}

export default WeaponItem