import { getDecks, submitEntry } from '../utils/API'

export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";

function getDecksAction(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function handleGetDecks() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(getDecksAction(JSON.parse(decks)))
    })
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function handleAddDeck(deckTitle) {
  return (dispatch, getState) => {

    console.log('current state:', getState());
  }
}

export function deleteDeck(title) {
  return {
    type: DELETE_DECK,
    title,
  };
}
