import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DeckItem from './DeckItem';
import { connect } from "react-redux";
import { handleGetDecks } from '../actions/decks'


const DeckList = (props) => {
    const { decks, dispatch } = props;

    useEffect(() => {
        if (Object.keys(decks).length === 0)
            dispatch(handleGetDecks())
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

    if (Object.keys(decks).length === 0) {
        return (
            <View style={styles.textNoDeck}>
                <Text style={{ fontSize: 25 }}>You must enter a Deck</Text>
                <MaterialCommunityIcons
                    name="emoticon-happy-outline"
                    size={50}
                    color="black"
                />
            </View>
        );
    }
    return <View style={styles.container}>
        {flatList(decks)}
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

function mapStateToProps({ decks }) {
    return {
        decks,
    };
}
export default connect(mapStateToProps)(DeckList);