import React, { useState, useEffect, Fragment } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDecks } from '../utils/API'
import DeckItem from './DeckItem';

const DeckList = (props) => {
    const [deckItems, setDeckItems] = useState({})
    useEffect(() => {
        getDecks().then((result) => {
            setDeckItems(JSON.parse(result))
            console.log(deckItems)
        })
    }, [])


    const flatList = (decksStorage) => {
        return (
            <FlatList
                data={Object.values(decksStorage)}
                renderItem={({ item }) => (
                    <DeckItem {...item} key={item.title} {...props} />
                )}
            />
        );
    };
    return <View style={styles.container}>
        {flatList(deckItems)}
    </View>;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginTop: 50,
    },
    textNoDeck: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default DeckList;