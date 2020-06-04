import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AddNewDeck from './AddNewDeck';
import DeckInfo from './DeckInfo';


const Stack = createStackNavigator();
const AddDeckRouter = () => {
    return (<Fragment>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={AddNewDeck} />
            <Stack.Screen name="DeckInfo" component={DeckInfo} />
        </Stack.Navigator>
    </Fragment>);
}

export default AddDeckRouter;