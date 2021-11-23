import {
    writable
} from "svelte/store"

export const candidates = writable({
    1: 'Max Muster',
    2: 'Tom Thomson',
    3: 'Gerd Gammel'
})