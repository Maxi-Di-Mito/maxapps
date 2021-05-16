import { writable } from 'svelte/store';

const initialStatus = {
    active: -1,
    cards: [],
    doneCount: 0,
    status: 'init'

}

const store = writable(initialStatus);



export default {
    subscribe: store.subscribe,
    setActive: (index) => store.update(oldState => {
        const currentActive = oldState.cards[oldState.active];
        const clicked = oldState.cards[index];
        if (currentActive && currentActive.alt === clicked.alt) {
            currentActive.done = true;
            clicked.done = true;
            oldState.doneCount += 2;
            if (oldState.doneCount === oldState.cards.length) {
                return {
                    ...initialStatus,
                    status: 'end'
                }
            }
            oldState.active = -1;
        } else {
            oldState.active = index;
        }
        return oldState;
    }),
    setStatus: (status) => store.update(oldState => {
        oldState.status = status;
        return oldState;
    }),
    setPack: pack => store.update(oldState => {
        console.info('PACK', pack);
        if (pack && pack.cards && pack.cards.length) {
            oldState.cards = [...pack.cards, ...(pack.cards.map(c => ({ ...c })))]
        }

        return oldState;
    }),
    restart: () => {
        store.update(oldState => {
            oldState.cards.forEach(c => c.done = false);
            oldState.status = 'init';
            return oldState;
        })
    }
}