import React, { Fragment } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import AddDeckRouter from './AddDeckRouter';
import DeckInfoRouter from './DeckInfoRouter';

const Tab = createMaterialBottomTabNavigator()
const TabNavigator = () => {

    return (
        <Tab.Navigator barStyle={{ backgroundColor: "#fff" }}>
            <Tab.Screen name="Decks" component={DeckInfoRouter} options={{
                tabBarIcon: () => (<MaterialIcons name="folder" size={24} color="gray" />)
            }} />
            <Tab.Screen name="AddDeck" component={AddDeckRouter} options={{
                tabBarIcon: () => (<MaterialIcons name="folder" size={24} color="gray" />)
            }} />
        </Tab.Navigator>

    );
}

export default TabNavigator;