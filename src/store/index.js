import {createStore} from 'vuex'

export default createStore({
    state: {
        // user: {"nutzerId": 1, "username": "admin"},
        user: null,
        pageName: '',
        color: '#daa31f',
        colorAktive: false,
        budget: 0,
        kategorie:[],
    },
    getters: {
        budget: (state) => {
            return state.budget

        },
        user: (state) => {
            return state.user
        },
        kategorie: (state) => {
            return state.kategorie
        }
    },
    mutations: {
        user(state, user) {
            state.user = user
        },
        budget(state, budget) {
            state.budget = budget
        },
        kategorie(state, kategorie) {
            state.kategorie = kategorie
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        },
        budget(context, budget) {
            context.commit('budget', budget)
        },
        kategorie(context, kategorie) {
            context.kategorie('budget', kategorie)
        }
    },
    modules: {}
})
