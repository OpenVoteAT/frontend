import { writable } from "svelte/store"

export const selection = writable({
    key: '',
    wahlId: '',
    selection: {
    // ID : Wahlpunkte
        1 : 6,
        2 : 5,
        3 : 4,
        4 : 3,
        5 : 2,
        6 : 1
    }
})