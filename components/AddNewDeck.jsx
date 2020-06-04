import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";


const AddNewDeck = (props) => {
    const [deckTitle, setDeckTitle] = useState();
    const { navigation } = props;

    useEffect(() => {
        setDeckTitle("");
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is the title of the new Deck?</Text>
            <View style={styles.border}>
                <TextInput
                    placeholder="Title of your Deck!"
                    onChangeText={(text) => {
                        setDeckTitle(text);
                    }}
                    value={deckTitle}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    if (!deckTitle) {
                        alert("Debe ingresar un valor");
                        return false;
                    }

                    navigation.navigate("DeckInfo", { title: deckTitle });
                }}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        marginRight: 10,
        marginLeft: 10,
    },
    border: {
        borderBottomColor: "black",
        borderStyle: "solid",
        borderBottomWidth: 1,
        margin: 40,
    },
    title: {
        fontWeight: "bold",
        fontSize: 45,
        textAlign: "center",
    },
    button: {
        marginBottom: 10,
        backgroundColor: "#2196F3",
        borderRadius: 20,
    },
    buttonText: {
        textAlign: "center",
        padding: 15,
        color: "white",
    },
});

export default AddNewDeck
