import React, { Fragment, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const Quiz = (props) => {

    const [answer, setAnswer] = useState();

    useEffect(() => {
        setAnswer("");
    }, []);


    const QuestionAnswer = () => {
        if (answer === "") {
            return (
                <View>
                    <Text style={styles.text}>{question.question}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setAnswer("");
                        }}
                    >
                        <Text style={styles.answerIcon}>Answer</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        if (answer === "Yes") {
            return (
                <View>
                    <Text style={styles.text}>Yes!</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setAnswer("");
                        }}
                    >
                        <Text style={styles.answerIcon}>Question</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        if (answer === "No") {
            return (
                <View>
                    <Text style={styles.text}>Incorrect answer!</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setAnswer("");
                        }}
                    >
                        <Text style={styles.answerIcon}>Question</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    };

    const {
        route: {
            params: { title },
        },
        decks,
        dispatch
    } = props

    const cards = decks[title].questions.length;
    const question = decks[title].questions[0];

    return (<Fragment>
        <View style={styles.container}>
            <View style={{ alignSelf: "flex-start", alignItems: "flex-start" }}>
                <Text style={{ fontSize: 25 }}>{`1/${cards}`}</Text>
            </View>
            {QuestionAnswer()}
            <View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => {
                            setAnswer("Yes");
                        }}
                    >
                        <View style={styles.buttonSuccess}>
                            <Text style={styles.buttonText}>Correct</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => {
                            setAnswer("No");
                        }}
                    >
                        <View style={styles.buttonDanger}>
                            <Text style={styles.buttonText}>Incorrect</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                disabled={answer === ""}
                onPress={() => {
                    let id2 = parseInt(cards) + 1;
                    debugger;
                    console.log(id2);
                    navigation.navigate("Quiz", { title, id: id2 });
                }}
            >
                <View style={styles.buttonNext}>
                    <Text style={styles.buttonText}>Next Question</Text>
                </View>
            </TouchableOpacity>
        </View>
    </Fragment>)
};
function mapStateToProps({ decks }) {
    return {
        decks,
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        textAlign: "center",
        fontSize: 30,
    },
    answerIcon: {
        textAlign: "center",
        fontSize: 20,
        color: "red",
    },
    buttonNext: {
        marginBottom: 20,
        backgroundColor: "#0275d8",
        borderRadius: 15,
    },
    buttonSuccess: {
        marginBottom: 20,
        backgroundColor: "#5cb85c",
        borderRadius: 15,
    },
    buttonDanger: {
        marginBottom: 20,
        backgroundColor: "#d9534f",
        borderRadius: 15,
    },
    buttonText: {
        textAlign: "center",
        padding: 15,
        color: "white",
    },
});
export default connect(mapStateToProps)(Quiz);
