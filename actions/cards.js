import { addQuestionToEntry } from '../utils/API'
export const ADD_CARD = "ADD_CARD";


export function addCard(title, question, answer) {
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
      dispatch(addCard(title, question, answer))
    })
  }
}