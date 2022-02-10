import { View, Text, Image } from 'react-native'
import React from 'react'

const AgentItem = ({ agent, index }) => {
    return (
        <View style={{ flex: 1, marginTop: 10 }}>
            <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                <Image source={{ uri: agent.displayIcon }} style={{ borderRadius: 20, marginTop: 5, width: 150, height: 150, resizeMode: 'cover' }} />
                <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>{agent.displayName}</Text>
                <Text style={{ color: 'black', fontSize: 18, textAlign: 'center' }}>{agent.description}</Text>
            </View>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Abilities</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                {agent.abilities.map((ability, index) => (
                    <View key={index} style={{ flex: 1, alignItems: 'center' }}>
                        <Image source={{ uri: ability.displayIcon }} style={{ width: 50, height: 50, resizeMode: 'cover', tintColor: 'black' }} />
                        <Text style={{ marginTop: 5, color: 'black', fontSize: 14, textAlign: 'center' }}>{ability.displayName}</Text>
                    </View>
                ))}
            </View>
            <View style={{ borderBottomWidth: 0.8, borderBottomColor: 'gray', marginTop: 10, marginHorizontal: 25 }} />
        </View>
    )
}

export default AgentItem