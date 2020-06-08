import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const FinalScore = (props) => {
    const {
        dispatch, decks,
        navigation,
        route: {
            params: { title }
        },
    } = props
    const correctAnswers = decks[title].correctAnswers
    const cards = decks[title].questions.length;

    const scoreMessage = () => {
        return (<Fragment>
            <View style={{ alignItems: 'center' }}>
                {(correctAnswers.length >= (cards / 2)) ? <MaterialCommunityIcons name="emoticon-happy-outline" size={100} color="black" />
                    : <MaterialCommunityIcons name="emoticon-sad-outline" size={100} color="black" />}
                <Text style={{ fontSize: 20, textAlign: 'center' }}>{`You answer ${correctAnswers.length} correct answers of ${cards} questions `}</Text>
            </View>
        </Fragment>)
    }

    return (<Fragment>
        <View style={styles.container} >
            {scoreMessage()}

            <View style={{ marginTop: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Start Quiz", { title });
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Restart Quiz</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {

                        navigation.navigate('DeckInfo', { title })
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Back to Deck</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </Fragment>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
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
})

function mapStateToProps({ decks }) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(FinalScore);