export default{
 
  getCount(state){
    return state.cartFoods.reduce((total,food)=>{

      return total+food.count
      
    },0)
  },
  getPrice(state){
    return state.cartFoods.reduce((total,food)=>{

     return total+(food.count*food.price)
    },0)
  },

  agreeCount(state){
    return state.ratings.reduce((pre,item)=>{
       
      return pre+(item.rateType===0?1:0)

    },0)
  }
  
}