import React, { Fragment } from 'react';
import { Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import AddDeckRouter from './AddDeckRouter';


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialBottomTabNavigator()
const TabNavigator = () => {

    return (
        <Tab.Navigator barStyle={{ backgroundColor: "#fff" }}>
            <Tab.Screen name="Decks" component={HomeScreen} options={{
                tabBarIcon: () => (<MaterialIcons name="folder" size={24} color="gray" />)
            }} />
            <Tab.Screen name="AddDeck" component={AddDeckRouter} options={{
                tabBarIcon: () => (<MaterialIcons name="folder" size={24} color="gray" />)
            }} />
        </Tab.Navigator>

    );
}

export default TabNavigator;