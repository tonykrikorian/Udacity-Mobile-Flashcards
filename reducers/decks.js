import { GET_DECKS, ADD_DECK, DELETE_DECK } from "../actions/decks";
import { ADD_CARD } from "../actions/cards";
import { omit } from 'lodash';


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
        },
      };
    }
    case DELETE_DECK: {
      console.log({ state })
      const state2 = { ...state }
      delete state2[action.deck]
      return state2


    }
    // case ADD_CARD: {
    //   return {
    //     ...state,
    //     [action.title]: {
    //       ...state[action.title],
    //       questions: [...state[action.title].questions, action.question],
    //     },
    //   };
    // }

    default:
      return state;
  }
}
