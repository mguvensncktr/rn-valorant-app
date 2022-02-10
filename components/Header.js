import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: '#fa4454',
            flex: 0.1,
            height: '100%',
            justifyContent: 'center',
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 22,
                        fontWeight: 'bold',
                    }}>
                    VALOPEDIA
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Header