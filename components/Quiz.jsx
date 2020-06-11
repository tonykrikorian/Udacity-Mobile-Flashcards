import React, { Fragment, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import {
  addAnswerToQuestionAction,
  clearCorrectQuestionAction,
} from "./../actions/cards";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";

const Quiz = (props) => {
  const [answer, setAnswer] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionNumberBar, setQuestionNumberBar] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  const {
    route: {
      params: { title },
    },
    decks,
    dispatch,
    navigation,
  } = props;

  const cards = decks[title].questions.length;
  let question = decks[title].questions[questionNumber];

  useEffect(() => {
    setAnswer("");
    setQuestionNumber(0), setQuestionNumberBar(1);
  }, []);

  useEffect(() => {
    if (answer == question.answer) {
      if (decks[title].correctAnswers.indexOf(questionNumber) == -1) {
        dispatch(addAnswerToQuestionAction(title, questionNumber));
      }
    }
  }, [answer]);

  const QuestionAnswer = () => {
    if (showAnswer) {
      return (
        <View>
          <Text style={[styles.text, { color: "#5cb85c" }]}>
            The correct answer is:
          </Text>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {question.description}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setAnswer("");
              setShowAnswer(false);
            }}
          >
            <Text style={styles.answerIcon}>Question</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (answer === "") {
      return (
        <View>
          <Text style={styles.text}>{question.question}</Text>
          <TouchableOpacity
            onPress={() => {
              setAnswer("");
              setShowAnswer(true);
            }}
          >
            <Text style={styles.answerIcon}>Answer</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (answer == question.answer) {
      return (
        <View>
          <Text style={[styles.text, { color: "#5cb85c" }]}>Yes!</Text>
          <Text style={[styles.text, { color: "#5cb85c" }]}>
            Correct answer!
          </Text>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {question.answer}
            </Text>
          </View>
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
    if (answer !== question.answer) {
      return (
        <View>
          <Text style={[styles.text, { color: "#d9534f" }]}>No!</Text>
          <Text style={[styles.text, { color: "#d9534f" }]}>
            Incorrect answer!
          </Text>
          <Text style={([styles.text], { fontSize: 25, textAlign: "center" })}>
            Please try again
          </Text>
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

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={{ alignSelf: "flex-start", alignItems: "flex-start" }}>
          <Text
            style={{ fontSize: 25 }}
          >{`${questionNumberBar}/${cards}`}</Text>
        </View>
        {QuestionAnswer()}
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                setAnswer(question.answer);
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
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <TouchableOpacity
            disabled={answer === ""}
            onPress={() => {
              let count = questionNumber;
              let count2 = questionNumberBar;

              if (
                parseInt(questionNumber) < parseInt(cards) &&
                parseInt(questionNumberBar) < parseInt(cards)
              ) {
                setQuestionNumber(++count);
                setQuestionNumberBar(++count2);
                setShowAnswer(false);
                setAnswer("");
              } else {
                setAnswer("");
                setQuestionNumber(0), setQuestionNumberBar(1);
                setShowAnswer(false);
                clearLocalNotification().then(() => {});
                setLocalNotification();
                navigation.navigate("Final Score", { title });
              }
            }}
          >
            <MaterialIcons name="navigate-next" size={45} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
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
