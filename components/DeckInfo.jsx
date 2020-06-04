import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getDecks } from '../utils/API'

const DeckInfo = (props) => {
    const {
        route: {
            params: { title, questions },
        },
        navigation,
    } = props;

    return (
        <View
            style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}
        >
            <View>
                <Text style={{ fontSize: 30, textAlign: "center" }}>{title}</Text>
                <Text
                    style={{ color: "gray", textAlign: "center" }}
                >{`0 Cards`}</Text>
            </View>

            <View style={{ marginTop: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        // navigation.navigate("AddCard", { title });
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Card</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        //navigation.navigate("Quiz", { title, id: 0 });
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {

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

export default DeckInfo;
