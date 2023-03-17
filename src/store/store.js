import { createStore } from 'vuex'


export default createStore({
    // count -> goal or total count
    // calorie category -> two categories a main meal or snack
    // calories available -> number
    // calories burned -> number
    state: {
        count: 0,
        // category selected from radio button
    },
    getters: {
        getCount(state) {
            return state.count
        },

    },

    mutations: {
        add(state, num) {
            state.count += num
        },
        sub(state, num) {
            state.count -= num
        },
        reset(state) {
            state.count = 0
        },
        setValue(state, num) {
            state.count = num
        },

    },

})
