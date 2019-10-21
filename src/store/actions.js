
import {reqSeller,reqGood,reqRatings} from '../api'

import {
  RECIVE_SELLERS,
  RECIVE_GOODS,
  RECIVE_RATINGS,
  RECIVE_COUNT,
  DECREASE_COUNT,
  DECREASE_CART
} from './mutation-types'



export default{
  async getSeller({commit}){
    const res=await reqSeller()
    if(res.code===0){
      const sellers=res.data
     
      commit(RECIVE_SELLERS,{sellers})
    }
  },
  async getGoods({commit}){
    const res=await reqGood()
    if(res.code===0){
      const goods=res.data
      commit(RECIVE_GOODS,{goods})
    }
  },
  async getRatings({commit}){
    const res=await reqRatings()
    if(res.code===0){
      const ratings=res.data
      commit(RECIVE_RATINGS,{ratings})
    }
  },

  addCount({commit},{isCheck,food}){

   if(isCheck){
    commit(RECIVE_COUNT,{food})
   }else{
    commit(DECREASE_COUNT,{food})
   }

  },

  clearCart({commit},callback){

    commit(DECREASE_CART)

    callback && callback()

  }

  



}