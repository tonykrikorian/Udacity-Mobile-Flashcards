import { addQuestionToEntry } from '../utils/API'
export const ADD_CARD = "ADD_CARD";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION"



export function addAnswerToQuestionAction(title, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    title,
    answer

  };
}

function addCard(title, question, answer, description) {
  return {
    type: ADD_CARD,
    title,
    questions: {
      question,
      answer,
      description
    },
  };
}

export function handleAddCard(title, question, answer, description) {
  return (dispatch) => {
    return addQuestionToEntry(title, { question, answer, description }).then(() => {
      dispatch(addCard(title, question, answer, description))
    })
  }
}