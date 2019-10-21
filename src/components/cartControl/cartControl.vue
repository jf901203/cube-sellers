<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-if="food.count>0"  @click.stop="addCount(false,food)">
          <span class="iconfont icon-jianhao1"></span>
      </div>
    </transition>

    <div class="cart-count" v-if="food.count>0">{{food.count}}</div>

    <div class="cart-add" @click.stop="addCount(true,food)">
        <span class="iconfont icon-jiahao7"></span>
    </div>

  </div>
</template>

<script>
export default {
data() {
return {

}
},
props:['food'],
methods:{
  addCount(isCheck,food){
   this.$store.dispatch('addCount',{isCheck,food})
  
  }
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.cartcontrol
  display flex
  align-items center
  .cart-decrease
    display inline-block
    padding .16rem
    .icon-jianhao1
      display inline-block
      line-height .533333rem
      font-size .533333rem
      color rgb(0,160,220)
      transform rotate(0)
    &.move-enter-active, &.move-leave-active
      transition all .3s 
    &.move-enter, &.move-leave-to
      opacity  0
      transform translateX(.4rem) rotate(90deg)
  .cart-add
    display inline-block
    padding .16rem
    opacity 1
    .icon-jiahao7
      font-size .533333rem
      color rgb(0,160,220)
      line-height .533333rem
      display inline-block
  .cart-count
    font-size .266667rem
    line-height .64rem   
    display inline-block
    color rgb(147,153,159)

</style>