import React, { useState, useEffect, Fragment } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDecks } from '../utils/API'
const DeckList = () => {

    const [deckList, setDeckList] = useState()
    useEffect(() => {
        //Get Decks list from Async Storage
        getDecks().then((result) => {
            setDeckList(JSON.stringify(result))
        })
    }, [])

    return (<Fragment>
        <View>
            <Text>Hello</Text>
        </View>
    </Fragment>);
}

export default DeckList;