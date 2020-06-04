import { ADD_CARD } from "../actions/cards";

export default function cards(state = {}, action) {
  switch (action.type) {
    case ADD_CARD: {
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [...state[action.title].questions, ...action.question],
        },
      };
    }

    default:
      return state;
  }
}
