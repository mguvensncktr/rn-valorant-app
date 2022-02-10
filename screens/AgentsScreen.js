import { ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext';
import AgentItem from '../components/AgentItem';

const AgentsScreen = () => {

    const { fetchAgents, agents } = useContext(AppContext);

    useEffect(() => {
        fetchAgents();
    }, [])

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {agents.map((agent, index) => (
                <AgentItem agent={agent} key={index} />
            ))}
        </ScrollView>
    )
}

export default AgentsScreen;