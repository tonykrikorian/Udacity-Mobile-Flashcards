import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DeckItem from './DeckItem';
import { connect } from "react-redux";
import { handleGetDecks } from '../actions/decks'


const DeckList = (props) => {
    const { decks, dispatch } = props;

    useEffect(() => {
        dispatch(handleGetDecks())

    }, [])


    const flatList = (decksStorage) => {
        return (
            <FlatList
                data={decksStorage}
                renderItem={({ item }) => (
                    <DeckItem {...item} key={item.id} {...props} />
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

    let i = 0;
    const decksData = Object.values(decks).map(item => {
        item.id = (++i).toString();
        return item;
    })
    return {
        decks: decksData,
    };
}
export default connect(mapStateToProps)(DeckList);