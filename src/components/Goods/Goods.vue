<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
    <cube-scroll-nav 
    :side="true" 
    :data="data"
    :options="scrollOptions"
    v-if="data.length"
    ref="scrollNav"
    >
      <template slot="bar" slot-scope="slotProps">
         <cube-scroll-nav-bar
          direction="vertical"
          :labels="slotProps.labels"
          :current="slotProps.current"
          :txts="barTxts"
         >

          <template slot-scope="slotProps">
            
            <span>{{slotProps.txt.name}}</span>

            <span class="num" v-if="slotProps.txt.count>0">
                <Bubble :num="slotProps.txt.count"/>
            </span>
          </template>


         </cube-scroll-nav-bar>
      </template>

      <cube-scroll-nav-panel
        v-for="item in data"
        :key="item.name"
        :label="item.name"
        :title="item.name"
        >
        <ul>
          <li 
          v-for="(food,index) in item.foods" 
          :key="index"
          class="food-item"
          @click="selectorFood(food)"
          >
            <div class="icon">
               <img :src="food.icon" alt="">
            </div>
            <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <div class="extra">
                <span>月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="prices">￥{{food.price}}</span>
                <span class="oldPrice" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
              <div class="cart-control-wrapper">
                <cartControl :food="food"/>
              </div>
            </div>

          </li>

        
          
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
    </div>
    <div class="shop-cart-wrapper">

      <shopCart ref="shopCart"/>

      </div>
     
  </div>
</template>

<script>
import cartControl from 'components/cartControl/cartControl'
import shopCart from 'components/shopCart/shopCart'
import Bubble from 'components/Bubble/Bubble'
import foodDetail from 'components/foodDetail/foodDetail'
import {mapState} from 'vuex'
export default {
props:['data'],
data() {
  return {
    scrollOptions: {
          click: false,
          directionLockThreshold: 0
        },

    foods:null  
  }
},
methods:{
  selectorFood(food){
   this.foods=food
   this._foodDetail()
   this._shopCartStiky()
  },
  _foodDetail(){
    this.foodDetailCom= this.foodDetailCom || this.$createFoodDetail({
      $props:{
        food:'foods',
      },
      $events:{
        hides:()=>{
          this._hideShopCartStiky()
        }
      }

    })
    
    this.foodDetailCom.show()
  },

  _shopCartStiky(){
    this.shopCartStikyCom=this.shopCartStikyCom || this.$createShopCartStiky({
      list:this.shopCartListComp
    })
    this.shopCartListComp = this.shopCartListComp|| this.$createShopCartList()
    this.shopCartStikyCom.show()
  },
  _hideShopCartStiky(){
    this.shopCartStikyCom.hide()
  }
},
computed:{
  barTxts() {
        const ret = []
        this.data.forEach((good) => {
          const {type, name, foods} = good
          let count = 0
          foods.forEach((food) => {
            count += food.count || 0
          })
          ret.push({
            type,
            name,
            count
          })
        })
        return ret
      }
},
components:{
  cartControl,
  shopCart,
  Bubble,
  foodDetail
}
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"

.goods
  position: relative
  text-align: left
  height: 100%
  .scroll-nav-wrapper
    position absolute
    width 100%
    top 0
    left 0
    bottom 0
    .cube-scroll-nav-bar
      width 2.133333rem
      white-space normal
      overflow hidden
      .cube-scroll-nav-bar-item
        position relative
        padding 0 .266667rem
        align-items center
        justify-content center
        display flex
        height 1.493333rem
        line-height .373333rem
        font-size $fontsize-small
        background $color-background-ssss
        &.cube-scroll-nav-bar-item_active
          background #fff
        .num
          position absolute
          right .053333rem
          top .053333rem 
    .cube-scroll-nav-panel-title
      font-size .32rem      
      background #F3F5F7
      padding .133333rem .373333rem
      box-sizing border-box
      border-left .053333rem solid #d9dde1
    .food-item
      
      display flex
      margin .48rem
      .icon
        flex-basis 1.52rem
        img 
          width 1.52rem
          height 1.52rem
      .content
        flex 1   
        margin-left  .266667rem
        position relative
        .name
          margin .053333rem 0 .213333rem 0
          height .373333rem
          line-height .373333rem
          font-size .373333rem
          color rgb(7,17,27)
        .desc
          font-size .266667rem
          color rgb(147,153,159)
          line-height .266667rem
          width 5.333333rem
          text-overflow ellipsis
          overflow hidden
          word-spacing normal
        .extra
          font-size .266667rem
          color rgb(147,153,159)
          line-height .266667rem
          margin-top .213333rem
          >span:last-child
            margin-left .32rem
        .price
          .prices
            font-size .373333rem
            color rgb(240,20,20)
            font-weight 700
            line-height .64rem
          .oldPrice
            font-size .266667rem
            color rgb(147,153,159)
            font-weight 700
            line-height .64rem
            text-decoration line-through
            margin-left .133333rem
        .cart-control-wrapper   
          position absolute
          right 0rem
          bottom 0rem
  .shop-cart-wrapper
    position abslute
    bottom 0     
    width 100%
    height 1.28rem
    left 0   



</style>