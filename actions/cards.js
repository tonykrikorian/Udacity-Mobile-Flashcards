export const ADD_CARD = "ADD_CARD";

export function addCard(title, question, answer) {
  return {
    type: ADD_CARD,
    title,
    question: {
      question,
      answer,
    },
  };
}
