import { AsyncStorage } from "react-native";
export const DECKS_KEYS = "UdaciFitness:calendar";


export function getDecks() {
    return AsyncStorage.getItem(DECKS_KEYS)
}

export function submitEntry(entry) {
    const data = {
        [entry]: {
            title: entry,
            questions: [],
        },
    };
    return AsyncStorage.mergeItem(DECKS_KEYS, JSON.stringify(data), (err) => {
        console.log(err);
    }).then(() => { });
}

export function removeEntry(key) {
    return AsyncStorage.getItem(DECKS_KEYS)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(DECKS_KEYS, JSON.stringify(data))
        })
}

export function addQuestionToEntry(key, pregunta) {
    return AsyncStorage.getItem(DECKS_KEYS)
        .then((results) => {
            const data = JSON.parse(results)
            data[key].questions.push(pregunta)
            AsyncStorage.setItem(DECKS_KEYS, JSON.stringify(data), (err) => {
                console.log(err);
            }).then(() => { })
        })
}

