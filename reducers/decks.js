import { GET_DECKS, ADD_DECK, DELETE_DECK } from "../actions/decks";
import { ADD_CARD, ADD_ANSWER_TO_QUESTION, CLEAR_CORRECT_QUESTIONS } from "../actions/cards";


export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return { ...state, ...action.decks };
    case ADD_DECK: {
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: [],
          correctAnswers: []
        },
      };
    }
    case DELETE_DECK: {
      const state2 = { ...state }
      delete state2[action.deck]
      return state2
    }
    case ADD_CARD: {
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [...state[action.title].questions, action.questions],
        },
      };
    }
    case ADD_ANSWER_TO_QUESTION: {
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          correctAnswers: [...state[action.title].correctAnswers, action.answer]
        }
      }
    }

    case CLEAR_CORRECT_QUESTIONS: {
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          correctAnswers: []
        }
      }
    }
    default:
      return state;
  }
}
