import {createStore} from 'vuex'

export default createStore({
    state: {
        user: null,
        pageName: '',
        color: '#d35cf1',
        colorAktive: false
    },
    getters: {
        user: (state) => {
            return state.user
        }
    },
    mutations: {
        user(state, user) {
            state.user = user
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        }
    },
    modules: {}
})
