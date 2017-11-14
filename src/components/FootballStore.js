/**
 * Created by negor on 14/11/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    events:[
        {
            id:34567878,
            description: 'Welcome'
        }
    ]
}

const mutations = {
    CREATE_EVENT: ( state,description )=>{
        state.events.push({
            id: Math.floor(Math.random()*1000000000),
            description: description
        })
    }
}

const getters = {
    events: state => state.events
}


let store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions:{

    },
    strict: true
})

global.store = store
export default store