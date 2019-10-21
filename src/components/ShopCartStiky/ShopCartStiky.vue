<template>
  <div class="shop-cart-wrapper" v-if="visibily">
  
    <shopCart :fold="fold" 
    :sticky=true />
    
  </div>
</template>

<script>

import shopCart from 'components/shopCart/shopCart'

export default {
name:'shop-cart-stiky',
data () {
  return {
    visibily:false  
  }
},
// fold传过来一直为false
props:{
  fold: {
        type: Boolean,
        default: true
  },
  // 接受组件实例
  list:{
    type:Object,
    default(){
      return{}
    }
  }
},

components:{
  shopCart
},
methods:{
  show(){
    this.visibily=true
  },
  hide(){
    this.visibily=false
  }
}


}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
 .shop-cart-wrapper
  position absolute
  bottom 0     
  width 100%
  height 1.28rem
  left 0  
  z-index 100

</style>