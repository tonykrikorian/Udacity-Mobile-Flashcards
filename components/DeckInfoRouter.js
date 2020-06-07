import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import DeckInfo from './DeckInfo';
import DeckList from './DeckList';
import AddCardToDeck from './AddCardToDeck';


const Stack = createStackNavigator();
const DeckInfoRouter = () => {
    return (<Fragment>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={DeckList} />
            <Stack.Screen name="DeckInfo" component={DeckInfo} />
            <Stack.Screen name="AddCard" component={AddCardToDeck} />
        </Stack.Navigator>
    </Fragment>);
}

export default DeckInfoRouter;