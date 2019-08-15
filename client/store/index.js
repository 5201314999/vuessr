import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {fetchItem} from './api'

export function createStore(){
    return new Vuex.store({
        state:{
            items:{}
        },
        actions:{
            fetchItem({commit},id){
                return fetchItem(id).then(re=>{
                    commit('setItem',{id,item})
                })
            }
        },
        mutations:{
            setItem(state,{id,item}){
                Vue.set(state.items,id,item)
            }
        }

    })
}


