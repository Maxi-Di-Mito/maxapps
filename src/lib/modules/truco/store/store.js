import { writable } from 'svelte/store';

const initialState = {
    points: {
        us: 0,
        them: 0,
    },
    mode: 30,
    winner: false,
};

const store = writable(initialState);

export default {
    subscribe: store.subscribe,
    addUs: () => {
        store.update((oldValue) => {
            oldValue.points.us++;
            if (oldValue.points.us >= oldValue.mode) {
                oldValue.winner = 'us';
            }
            return oldValue;
        });
    },
    addThem: () => {
        store.update((oldValue) => {
            oldValue.points.them++;
            if (oldValue.points.them >= oldValue.mode) {
                oldValue.winner = 'them';
            }
            return oldValue;
        });
    },
    switchMode: () => {
        store.update((oldValue) => {
            oldValue.mode = oldValue.mode == 15 ? 30 : 15;
            return oldValue;
        });
    },
    reset: () => {
        store.update((oldValue) => {
            oldValue.points.us = 0;
            oldValue.points.them = 0;
            oldValue.winner = false;
            return oldValue;
        });
    },
};
