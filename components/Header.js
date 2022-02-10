import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <SafeAreaView style={{
            marginTop: 50,
            backgroundColor: '#fa4454',
            flex: 0.1,
            height: '100%',
            justifyContent: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>VALORANT WIKI
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Header