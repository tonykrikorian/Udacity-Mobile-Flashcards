import { getDecks, submitEntry, removeEntry } from '../utils/API'

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

function addDeckAction(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function handleAddDeck(deckTitle) {
  return (dispatch, getState) => {
    return submitEntry(deckTitle).then(() => {
      dispatch(addDeckAction(deckTitle))
    })
  }
}


export function deleteDeck(title) {
  return {
    type: DELETE_DECK,
    title,
  };
}

function deleteDeckAction(deck) {
  return {
    type: DELETE_DECK,
    deck
  }
}

export function handleDeleteDeck(deck) {
  return {
    type: DELETE_DECK,
    deck
  }
  // return (dispatch) => {
  //   return removeEntry(deck).then(() => {
  //     dispatch(deleteDeckAction(deck))
  //   })
  // }
}