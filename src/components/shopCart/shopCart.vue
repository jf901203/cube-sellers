<template>
  <div>
    <div class="container" @click.stop="toggleList">
      <div class="container-logo">
        <div class="cart">
          <div class="big-cart">
            <div class="min-cart" :class="{bg:cartFoods.length}">
              <span class="iconfont icon-ai-cart" :class="{bg:cartFoods.length}"></span>
            </div>
          </div>
        </div>
        <div class="count" v-if="getCount">{{getCount}}</div>
        <div class="num">￥{{getPrice}}</div>
      </div>
      <div class="container-desc">
        另需配送费￥4元
      </div>
      <div @click="pay" class="container-price" :class="{bg:bgColor}" v-if="sellers.minPrice">
        {{startPrice}}
      </div>
    </div>

   
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
props:{
  fold: {
        type: Boolean,
        default: true
      },
   sticky: {
        type: Boolean,
        default: false
      }    
},
data() {
  return {
     listFold: this.fold
  }
},

// computed对象中的回调函数 初始化显示数据的时候 执行回调函数
// 相关的data的属性发生改变的时候 执行回调函数
computed:{
  ...mapState(['cartFoods','sellers']),
  ...mapGetters(['getCount','getPrice']),
  startPrice(){
    // 只要相关的data属性发生改变 这个回调函数都会执行
      const {getPrice}=this
      const {minPrice}=this.sellers
     if(getPrice===0){
       return `￥${minPrice}起送`
     }else if(getPrice < minPrice){
       let diff=minPrice-getPrice
        return `还差￥${diff}起送`
     }else{
       return '去结算'
     }
  },
  bgColor(){
   const {startPrice,getPrice}=this
   const {minPrice}=this.sellers
    if(getPrice>minPrice){
      return true
    }else{
      return false
    }
  }
},
methods:{
  toggleList(){
    if(this.listFold){
       if(!this.cartFoods.length){
         return
       }
      this.listFold=false
      // 创建组件实例
      this._shopCartLis()
      this._shopCartSticky()
    }else{
      this.listFold=true
      this._shopCartLisHide()
    }
  },
_shopCartLis(){
  // 这个是实例
  this.shopCartListComp = this.shopCartListComp|| this.$createShopCartList({
    $events:{
      hides: () => {
            this.listFold = true
            this._shopCartStikyHide()
          },
      leave:()=>{
        this.listFold = true
        this._shopCartStikyHide()
      }     
    }
  })
  this.shopCartListComp.show()
},


_shopCartSticky(){
  // 这是组件实例 是购车组件的克隆体
 this.shopCartStickyComp = this.shopCartStickyComp || this.$createShopCartStiky({
   $props:{
    fold:'listFold',
    list:this.shopCartListComp,
    sticky:'sticky'
   }
 })
 this.shopCartStickyComp.show()
},
_shopCartLisHide(){
 const comp=this.sticky? this.$parent.list:this.shopCartListComp
 comp.hide && comp.hide()
},
_shopCartStikyHide(){
  this.shopCartStickyComp.hide()
},
pay(e){
  const {minPrice}=this.sellers
  if(this.getPrice < minPrice){
    return
  }
  this.$createDialog({
        title: '支付',
        content: `共支付${this.getPrice}元`
      }).show()
  e.stopPropagation()   
}
},
watch:{
  cartFoods(val){
    if(!val){
      this._shopCartLisHide()
    }
  }
}

}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.container
  width 100%
  height 1.28rem
  background rgb(20,29,39)
  display flex
  .container-logo
    flex-basis 25%
    display flex
    position relative
    .cart
      position relative
      .big-cart
        position absolute
        width 1.546667rem
        height 1.546667rem
        margin-left .3rem
        border-radius 50%
        top -0.266667rem
        background rgb(20,29,39)
        .min-cart
          width 1.173333rem
          height 1.173333rem
          display flex
          justify-content center
          align-items center
          border-radius 50%
          background rgb(43,52,60)
          margin-left 50%
          margin-top 50%
          &.bg
            background #00A0DC
          transform translate(-50%,-50%)
          .icon-ai-cart
            font-size .64rem
            color #80858A
            &.bg
              color #fff
    .num 
      position absolute
      right -0.213333rem
      color  #919396
      font-size .426667rem
      line-height .64rem   
      font-weight 700
      top .266667rem
    .count
      position absolute
      background red  
      border-radius .133333rem
      font-size .32rem
      left 1.333333rem
      top -0.266667rem
      color #fff
      padding  0 .133333rem

  .container-desc
    flex 1  
    font-size .426667rem
    color #52585E
    font-weight 700
    display flex
    justify-content center
    align-items center
    padding .32rem 0rem
    box-sizing border-box
    &:before
      content ""
      width .026667rem
      height 100%
      background #52585E
      margin-right .32rem
      display inline-block
  .container-price
    flex-basis 25%
    background #2B333B
    display flex
    justify-content center
    align-items center
    color #979A9C
    font-size .32rem
    font-weight 700
    &.bg
      background #01AB31
      color #fff
.ball-container
  border 1px solid blue
  .ball
    position fixed
    left .853333rem
    bottom .586667rem
    z-index 200
    transition all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
    .inner
      width .426667rem
      height .426667rem
      border-radius 50%
      background blue
      transition all .4s linear
</style>