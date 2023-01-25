import {createStore} from 'vuex'

export default createStore({
    state: {
        // user: {"nutzerId": 1, "username": "admin"},
        user: null,
        pageName: '',
        color: '#daa31f',
        colorAktive: false,
        budget: 0,
        kategorie: [],
        ausgabeGekauft: [],
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
        },
        ausgabeGekauft: (state) => {
            return state.ausgabeGekauft
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
        },
        ausgabeGekauft(state, ausgabeGekauft) {
            state.ausgabeGekauft = ausgabeGekauft
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
            context.commit('kategorie', kategorie)
        },
        ausgabeGekauft(context, ausgabeGekauft) {
            context.commit('ausgabeGekauft', ausgabeGekauft)
        }
    },
    modules: {}
})
