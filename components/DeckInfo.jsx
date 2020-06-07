import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { handleDeleteDeck, handleGetDecks } from '../actions/decks'

const DeckInfo = (props) => {
    const {
        route: {
            params: { title, questions },
        },
        navigation,
        dispatch,
        decks
    } = props;
    let cards = 0
    if (decks[title]) cards = decks[title].questions.length


    return (
        <View
            style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}
        >
            <View>
                <Text style={{ fontSize: 30, textAlign: "center" }}>{title}</Text>
                <Text
                    style={{ color: "gray", textAlign: "center" }}
                >{`${cards} Cards`}</Text>
            </View>

            <View style={{ marginTop: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("AddCard", { title });
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Card</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Start Quiz", { title });
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        dispatch(handleDeleteDeck(title))
                        navigation.navigate('Home')
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Delete Deck</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
        backgroundColor: "#2196F3",
        borderRadius: 15,
    },
    buttonText: {
        textAlign: "center",
        padding: 15,
        color: "white",
    },
});
function mapStateToProps({ decks }) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(DeckInfo);
