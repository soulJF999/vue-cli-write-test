import {createStore} from "vuex/dist/vuex.esm-bundler"
import addCount from './getters/count'

const moduleA = {
    // namespaced: true,
    state: () => ({
        count: 3
    }),
    mutations: {
        increment (state) {
            state.count ++
        }
    },
    getters: {
        doubleCount (state) {
            return state.count * 2
        }
    },
    actions: {
        incrementRootStateAndState ({state, rootState, commit}) {
            console.log('buy')
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        }
    }
}

const store = createStore({
    modules: {
      a: moduleA
    },
    state: {
        count: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    mutations: {
        increment (state) {
            state.count ++
        },
        decrement (state, payload) {
            state.count -= payload.count
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        actionA({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => commit('someMutation'))
                resolve()
            }, 1000)
        },
        actionB({dispatch, commit}) {
            return dispatch('actionA').then(() => {
                commit('someOtherMutation')
            })
        },
        incrementRootStateAndState ({state, commit}) {
            console.log('hey')
            if (state.count % 2 === 1) {
                commit('increment')
            }
        }
    },
    getters: {
        addCount
    }
})

export default store