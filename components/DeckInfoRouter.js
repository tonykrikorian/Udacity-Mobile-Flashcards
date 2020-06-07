import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import DeckInfo from './DeckInfo';
import DeckList from './DeckList';
import AddCardToDeck from './AddCardToDeck';
import Quiz from './Quiz';


const Stack = createStackNavigator();
const DeckInfoRouter = () => {
    return (<Fragment>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={DeckList} />
            <Stack.Screen name="DeckInfo" component={DeckInfo} />
            <Stack.Screen name="AddCard" component={AddCardToDeck} />
            <Stack.Screen name="Start Quiz" component={Quiz} />
        </Stack.Navigator>
    </Fragment>);
}

export default DeckInfoRouter;