<template>
  <transition name="moves">
    <div class="detail" v-show="visiblity">
      <cube-scroll ref="scroll" class="scroll-list-wrap">
        <div class="header_img">
          <img :src="food.image" alt="">
          <div @click="hide" class="arrow">
            <span class="iconfont icon-ios-arrow-back"></span>
          </div>
        </div>
        <div class="des">
          <div class="des_name">{{food.name}}</div>
          <div class="des_num">
            <span>月售{{food.sellCount}}份</span>
            <span>好评{{food.rating}}%</span>
          </div>
          <div class="des_price">
            <span class="money">￥<span class="money_red">{{food.price}}</span></span>
            <span class="oldMoney" v-if="food.oldPrice>0">￥<span class="oldMoney_red">{{food.oldPrice}}</span></span>
          </div>
          <div class="shop_cart">

            
            <div class="shop_cart_food">
              <cartControl :food="food"/>
            </div>
            <transition name="cart">
              <div class="shop_cart_chi" v-show="!food.count" @click="add(true)">加入购物车</div>
            </transition>
          </div>
        </div>
          <spaceLine />
        <div class="production">
          <div class="pro_name">商品介绍</div>
          <div class="pro_des">
             <p>{{food.info}}</p>
          </div>
        </div>
        <spaceLine />
        <div class="pro_rating">
          <div>
            <div class="quanbu" @click="selectLikes(2)" :class="rateType===2 ? 'bg':''">
            <span>全部</span>
            <span>{{food.ratings.length}}</span>
          </div>
          <div class="quanbu" @click="selectLikes(0)" :class="rateType===0 ? 'bg':''">
            <span>推荐</span>
            <span>{{food.ratings.length-recommend}}</span>
          </div>
          <div class="quanbu" @click="selectLikes(1)" :class="rateType===1 ? 'bg':''">
            <span>吐槽</span>
            <span>{{recommend}}</span>
          </div>
          </div>
          <div class="text">
            <span class="iconfont icon-xuanzhong_" :class="{hooks:hook}" @click="nick"></span>
            <span :class="{hooks:hook}">只看有内容的评价</span>
          </div>
        </div>
        
        <div class="ratings">
           <ul v-if="ratingsArr.length">
             <li class="ratings_list" v-for="(rating,index) in ratingsArr" :key="index">
               <div class="list_timer">
                 <div class="ratings_timer">{{rating.rateTime | date-format}}</div>
                 <div class="ratings_avator">
                   <span>{{rating.username}}</span>
                   <img class="avatar" :src="rating.avatar" alt="">
                 </div>
               </div>
               <div class="list_text">
                 <span class="iconfont icon-dianzan00 dianzan00" v-if="rating.rateType===0"></span>
                 <span class="iconfont icon-dianzan2 dianzan2" v-else></span>
                 <span class="text_des">{{rating.text}}</span>
               </div>
             </li>
           </ul>
           <div v-else class="evaluation">暂无评价</div>
        </div>
     </cube-scroll>    
    </div>
</transition>
</template>

<script>

import cartControl from 'components/cartControl/cartControl'
import spaceLine from 'components/spaceLine/spaceLine'
export default {
  name:'food-detail',
  data() {
    return {
     visiblity:false,
     hook:false,
     rateType:2
    }
  },
  props:{
    food:{
      type:Object
    }
  },
 
  methods:{
    show(){
     this.visiblity=true
     const arr = Object.keys(this.food)
     if(arr.length>0){
       this.$nextTick(()=>{
       this.$refs.scroll.refresh()
     })
     }
    },
    hide(){
    this.visiblity=false
    this.$emit('hides')
    },
    nick(){
      
      this.hook=!this.hook
    },
    selectLikes(ind){
      this.rateType=ind
    },
    add(isCheck){
      const {food}=this
      this.$store.dispatch('addCount',{isCheck,food})
    }
  },
  computed:{
   
   ratingsArr(){
    
    const {hook,rateType}=this
    const {ratings} =this.food
    
    return ratings.filter((item)=>{  
      return (rateType===2 || item.rateType===rateType) && (!hook || item.text.length>0)
      })

   },

   
  recommend(){
    const {ratings} =this.food
    return ratings.reduce((pre,item)=>{
     return pre+(item.rateType===1?1:0)
    },0)
  }


  },
  components:{
    cartControl,
    spaceLine
  }

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.detail
  position fixed
  top 0
  left 0
  bottom  1.173333rem
  width 100%
  background #f3f5f7
  color #000
  z-index 1
  &.moves-enter-active, &.moves-leave-active
    transition  all .3s linear
  &.moves-enter, &.moves-leave-to
    transform translate3d(100%,0,0) 
  .arrow
    position absolute
    top  0rem
    left  0rem
    padding .266667rem  
    .icon-ios-arrow-back
      font-size .8rem
      color #fff
  // 是一个长宽相等的正方形的布局
  .header_img
    width 100%
    height 0
    position relative
    // 让这个盒子生成正方形
    padding-top 100%    
    img 
      position absolute
      top 0
      left 0
      width 100%
      height 100%
  .des
    padding .48rem
    box-sizing border-box
    position relative
    background #fff
    .des_name
      font-weight 700
      font-size .373333rem
    .des_num
      font-size .266667rem
      color rgb(147,153,159)  
      line-height .266667rem
      margin-top .213333rem
      margin-bottom .48rem
    .des_price
      margin .48rem 0rem
      font-size .266667rem
      font-weight 700
      .money
        color rgb(2470,20,20)
        line-height .64rem  
        .money_red
          font-size .373333rem
          font-weight 700
      .oldMoney
        color rgb(147,153,159)
        font-size .266667rem
        font-weight 700
        line-height .64rem
        margin-left .213333rem
        text-decoration line-through
    .shop_cart
      position absolute
      right .48rem
      bottom .48rem
      .shop_cart_chi
        font-size .266667rem
        color rgb(255,255,255)
        line-height .64rem
        background rgb(0,160,220)
        border-radius .32rem
        width 1.973333rem
        height .64rem
        text-align center
        position absolute
        right .48rem
        bottom .48rem
        &.cart-enter-active, &.cart-leave-active
          transition opacity  .3s
        &.cart-enter, &.cart-leave-to
          opacity 0
      .shop_cart_food
        position absolute 
        right .48rem
        bottom .4rem 
  .production
    
    padding .48rem
    box-sizing border-box
    background #fff
    .pro_name
      font-size .373333rem
    .pro_des
      font-size .32rem
      font-weight 200
      color rgb(77,85,93)
      line-height .64rem  
  .pro_rating

    padding .48rem
    box-sizing border-box
    background #fff 
    .quanbu 
      display inline-block
      font-size .373333rem
      padding .426667rem
      margin-right .213333rem
      background rgba(77,85,93,.2)
      color rgb(77,85,93)
      border-radius .053333rem
      &.bg
        background #00A0DC
        color #fff
      span:last-child 
        font-size .213333rem
        margin-left .133333rem

    .text
    
      position relative
      font-size .32rem
      color rgb(147,153,159)
      line-height .64rem
      &:before
        content ''
        display inline-block
        width 100%
        height 1px
        background rgba(7,17,27,.1)
      .icon-xuanzhong_
        font-size .32rem
        color rgb(147,153,159)
        line-height .64rem
        margin-right .106667rem
      .hooks
        color #00A0DC
  .ratings
    padding 0px .48rem
    box-sizing border-box
    position relative
    background #fff
    &:before
      position absolute
      display inline-block
      content ''
      width 100%
      height 1px
      background rgba(7,17,27,.1)
      left 0   
    .ratings_list
      padding .426667rem 0rem
      position relative  
      &:not(:last-child):after
        position absolute
        display inline-block
        content ''
        width 100%
        height 1px
        background rgba(7,17,27,.1)
        left 0
        bottom 0  
      .list_timer
        display flex  
        justify-content space-between
        .ratings_timer
          font-size .266667rem
          color rgb(147,153,159)
          line-height .32rem
        .ratings_avator
          font-size .266667rem
          color rgb(147,153,159)
          line-height .32rem 
          .avatar
            width .64rem
            height .64rem
            margin-left .16rem
            border-radius 50%
            vertical-align middle
      .list_text
        font-size .32rem    
        line-height .64rem  
        .dianzan00
          color #00A0DC
        .dianzan2
          color #B7BBBF  
        .text_des
          margin-left .106667rem
  .evaluation
    font-size .32rem
    line-height 1.2rem
    height 1.2rem         
</style>