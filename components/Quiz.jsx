import React, { Fragment, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const Quiz = (props) => {
    const {
        route: {
            params: { title, id },
        },
        decks,
        dispatch
    } = props
    return (<View>
        <Text>Quiz</Text>
    </View>)
};
function mapStateToProps({ decks }) {
    return {
        decks,
    };
}
export default connect(mapStateToProps)(Quiz);
