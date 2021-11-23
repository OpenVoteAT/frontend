import {
    writable
} from "svelte/store";

export const moegliche = writable([{
        id: 1,
        name: 'Max Muster',
        choosen: false
    },
    {
        id: 2,
        name: 'Tom Thomson',
        choosen: false
    },
    {
        id: 3,
        name: 'Gerd Gammel',
        choosen: false
    }
]);