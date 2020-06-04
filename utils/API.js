import { AsyncStorage } from "react-native";
export const DECKS_KEYS = "UdaciFitness:calendar";



export function getDecks() {
    return AsyncStorage.getItem(DECKS_KEYS);
}

export function submitEntry(entry) {
    const data = {
        [entry]: {
            title: entry,
            questions: [],
        },
    };

    console.log("Submit entry");
    console.log(JSON.stringify(data));
    return AsyncStorage.mergeItem(DECKS_KEYS, JSON.stringify(data), (err) => {
        console.log(err);
    }).then(() => { });
}
