import { ScrollView } from 'react-native';
import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import MapList from '../components/MapList';

const MapsScreen = () => {

    const { fetchMaps } = useContext(AppContext);

    useEffect(() => {
        fetchMaps();
    }, [])


    return (
        <MapList />
    )
}

export default MapsScreen