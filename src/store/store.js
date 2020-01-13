import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
        category: undefined,
        score: undefined
    },
    mutations: {
      setCategory (state, category) {
        state.category = category;
        },
        setScore(state, score) {
            state.score = score;
        }
    },
  getters: {
      category: state => state.category,
      score: state => state.score
    }
})