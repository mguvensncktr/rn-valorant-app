import React, { createContext, useState } from "react";
import axios from "axios";

const AppContext = createContext();
const API_URL = "https://valorant-api.com/v1";

export const AppContextProvider = ({ children }) => {

    const [agents, setAgents] = useState([]);
    const [weapons, setWeapons] = useState([]);
    const [maps, setMaps] = useState([]);

    const fetchAgents = async () => {
        const res = await axios.get(`${API_URL}/agents?isPlayableCharacter=true`);
        setAgents(res.data.data);
    };

    const fetchWeapons = async () => {
        const res = await axios.get(`${API_URL}/weapons`);
        setWeapons(res.data.data);
    }

    const fetchMaps = async () => {
        const res = await axios.get(`${API_URL}/maps`);
        setMaps(res.data.data);
        console.log(res.data.data);
    }

    return (
        <AppContext.Provider value={{ fetchAgents, agents, weapons, fetchWeapons, fetchMaps, maps }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;