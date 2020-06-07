import { addQuestionToEntry } from '../utils/API'
export const ADD_CARD = "ADD_CARD";


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