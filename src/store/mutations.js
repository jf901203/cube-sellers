
import {
  RECIVE_SELLERS,
  RECIVE_GOODS,
  RECIVE_RATINGS,
  RECIVE_COUNT,
  DECREASE_COUNT,
  DECREASE_CART
} from './mutation-types'
import Vue from 'vue'
export default{

 [RECIVE_SELLERS](state,{sellers}){
   state.sellers=sellers
  
 },
 [RECIVE_GOODS](state,{goods}){

   state.goods=goods
},
[RECIVE_RATINGS](state,{ratings}){
  
   state.ratings=ratings
},

[RECIVE_COUNT](state,{food}){
    if(!food.count){
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },

[DECREASE_COUNT](state,{food}){
    if(food.count){
      food.count--
      if(food.count===0){
      state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }

  },

  [DECREASE_CART](state){
   
     state.cartFoods.map((item)=>{
        item.count=0
     })

     state.cartFoods=[]

  }

}