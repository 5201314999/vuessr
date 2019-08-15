import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home=()=>import('../views/Home')
import Shop=()=>import('../views/Shop')
import User=()=>import('../views/user/User') 
import CreateUser=()=>import('../views/user/Create') 
import UpdateUser=()=>import('../views/user/Update') 
export function createRouter(){
    return new Router({
        mode:'history',
        routes:[
            {
              path:'/home/:id',
              componet:Home
            },
            {
              path:'/shop',
              componet:Shop
            },{
              path:'/user',
              componet:User,
              children:[
                {
                  path:'/create',
                  componet:CreateUser
                },{
                  path:'update',
                  componet:UpdateUser
                }
              ]
            }
        ]
    })
}