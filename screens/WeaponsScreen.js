import { Text, ScrollView } from 'react-native';
import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import WeaponItem from '../components/WeaponItem';

const WeaponsScreen = () => {

    const { weapons, fetchWeapons } = useContext(AppContext);

    useEffect(() => {
        fetchWeapons();
    }, []);

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {weapons.map((weapon, index) => (
                <WeaponItem weapon={weapon} key={index} />
            ))}
        </ScrollView>
    )
}

export default WeaponsScreen