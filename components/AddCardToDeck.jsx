import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { handleAddCard } from "./../actions/cards";

const AddCardToDeck = (props) => {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [description, setDescription] = useState();
  const {
    dispatch,
    navigation,
    route: {
      params: { title },
    },
  } = props;

  useEffect(() => {
    setQuestion("");
    setAnswer("");
    setDescription("");
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write one question and an answer </Text>
      <View style={styles.border}>
        <TextInput
          placeholder="Write a question"
          onChangeText={(text) => {
            setQuestion(text);
          }}
          value={question}
        />
      </View>
      <View style={styles.border}>
        <TextInput
          placeholder="Write an answer"
          onChangeText={(text) => {
            setAnswer(text);
          }}
          value={answer}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (!question) {
            alert("You may enter a question");
            return false;
          }
          if (!answer) {
            alert("You may enter an answer");
            return false;
          }

          dispatch(handleAddCard(title, question, answer));
          setQuestion("");
          setAnswer("");
          setDescription("");
          navigation.navigate("DeckInfo", { title });
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
    fontSize: 35,
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
function mapStateToProps({ decks }) {
  return { decks };
}
export default connect(mapStateToProps)(AddCardToDeck);
