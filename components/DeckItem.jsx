import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const DeckItem = (props) => {
    const { title, questions, navigation } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("DeckInfo", { title, questions });
                }}
            >
                <View style={styles.deckItem}>
                    <Text style={{ fontSize: 25 }}>{title}</Text>
                    <Text style={{ color: "gray" }}>{`${questions.length} cards`}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    deckItem: {
        alignItems: "center",
        borderColor: "gray",
        borderStyle: "solid",
        borderWidth: 1,
        padding: 40,
        borderRadius: 10,
        marginTop: 5,
    },
});
export default DeckItem;
