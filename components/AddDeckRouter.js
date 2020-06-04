import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AddNewDeck from './AddNewDeck';


const Stack = createStackNavigator();
const AddDeckRouter = () => {
    return (<Fragment>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={AddNewDeck} />
        </Stack.Navigator>
    </Fragment>);
}

export default AddDeckRouter;