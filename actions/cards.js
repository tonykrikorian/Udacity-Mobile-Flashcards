import { addQuestionToEntry } from "../utils/API";
export const ADD_CARD = "ADD_CARD";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const CLEAR_CORRECT_QUESTIONS = "CLEAR_CORRECT_QUESTIONS";

export function addAnswerToQuestionAction(title, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    title,
    answer,
  };
}

export function clearCorrectQuestionAction(title, answer) {
  return {
    type: CLEAR_CORRECT_QUESTIONS,
    title,
  };
}

function addCard(title, question, answer) {
  return {
    type: ADD_CARD,
    title,
    questions: {
      question,
      answer,
    },
  };
}

export function handleAddCard(title, question, answer) {
  return (dispatch) => {
    return addQuestionToEntry(title, { question, answer }).then(() => {
      dispatch(addCard(title, question, answer));
    });
  };
}
