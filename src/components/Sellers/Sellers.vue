<template>
<cube-scroll :options="options">
  <div class="sellers_container">
     <div class="sellers_content">
        <div class="sellers_head">
          <div class="head_left">
            <h3 class="sellsers_name">{{sellers.name}} </h3>
            <div class="sellser_start">
              <span class="sellers_code">
                <Start size="36" :code="sellers.score"/>
              </span>
              <span class="sellers_figure">6656</span>
              <span class="sellers_num">月售{{sellers.sellCount}}单</span>
            </div>
          </div>
          <div class="head_right" @click="likes">
            <div>
              <span class="iconfont icon-dianzan8 dianzan8" :class="{favorite}"></span>
            </div>
            <div class="cang">{{collect}}</div>
          </div>
        </div>
        <div class="sellers_delivery">
          <div class="sellers_item">
            <div class="sellers_amount">
               <div class="amount_num">起送价</div>
               <div>
                 <span class="delivery_num">{{sellers.minPrice}}</span>
                 <span>元</span>
               </div>
            </div>
            <div class="sellers_minimum">
              <div class="amount_num">商家配送</div>
               <div>
                 <span class="delivery_num">{{sellers.deliveryPrice}}</span>
                 <span>元</span>
               </div>
            </div>
            <div class="sellers_tiems">
              <div class="amount_num">平均配送时间</div>
               <div>
                 <span class="delivery_num">{{sellers.deliveryTime}}</span>
                 <span>分钟</span>
               </div>
            </div>
          </div>
        </div>
        <spaceLine/>
        <div class="suportant">
          <h3 class="suportant_title">
            公告与活动
          </h3>
          <p class="suportant_des">
            {{sellers.bulletin}}
          </p>
          <div class="suportant_activity">
            <ul>
              <li class="suportant_active_item" 
              v-for="(sup,index) in sellers.supports"
              :key="index"
              >
                <span  :class="supports[sup.type]">
                </span>
                <p class="description">{{sup.description}}</p>
              </li>
              
            </ul>
          </div>
          
        </div>
        <spaceLine/>
        <div class="info">
         <h3 class="info_title">商家实景</h3>
         <div class="scroll_wrapper">
            
           <scroll :data="sellers.pics" v-if="sellers.pics"/>

         </div>
        </div>
        <spaceLine/>
        <div class="amend">
          <h3 class="amend_title">商家信息</h3>
          <ul class="amend_shoe">
            <li class="amend_item">该商家支持发票，请在下单时填写好发票抬头</li>
            <li class="amend_item">品类：其他菜系、包子粥店</li>
            <li class="amend_item">地址：广州市天河区</li>
            <li class="amend_item">营业时间:10:00-20:30</li>
          </ul>
        </div>
     </div>
  </div>
</cube-scroll>  
</template>

<script>
import Start from 'components/Start/Start'
import spaceLine from 'components/spaceLine/spaceLine'
import scroll from 'components/scroll/scroll'
import {mapState} from 'vuex'

import storage from 'common/js'
import { setTimeout } from 'timers';

export default {
data() {
return {
  supports:['jian','zhe','te','piao','bao'],
  direction:'horizontal',
  options:{
    click:false
  },
  favorite:false
}
},

mounted() {
 setTimeout(()=>{
  
  this.favorite=storage.readTodos(this.sellers.id,'favorite')

 },300)
},

computed:{
  ...mapState(['sellers']),
  collect(){
    const {favorite}=this
    return favorite ? '已收藏':'收藏'
  }
},
methods:{
  likes(){
    this.favorite=!this.favorite
    storage.saveTodos(this.sellers.id,'favorite',this.favorite)
  }
},
components:{
  Start,
  spaceLine,
  scroll
}
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import 'stylus/mixin.styl'
.sellers_container
  width 100%
  .sellers_content
    width 100%
    .sellers_head
      display flex
      padding .48rem 
      box-sizing border-box
      .head_left
        flex 1
        .sellsers_name
          font-size .426667rem
          color rgb(7,17,27)
          line-height .373333rem
          width 100%
          text-align left 
          margin-bottom .213333rem
          font-weight 700
        .sellser_start
          display flex  
          .sellers_figure
            font-size .266667rem
            margin-left .213333rem
            margin-right .32rem
            color rgb(77,85,93)  
            line-height .48rem
          .sellers_num
            font-size .266667rem
            color rgb(77,85,93) 
            line-height .48rem 
      .head_right
        flex-basis 25% 
        display flex
        justify-content center
        align-items center
        flex-flow column
        position relative
        &:before
          content  ''
          width 1px
          height 100%
          background rgba(7,17,27,.1)
          position absolute
          left 0
        .dianzan8
          font-size .64rem
          color rgb(77,85,93)
          line-height .266667rem
          &.favorite
            color red
        .cang
            font-size .266667rem
            color rgb(77,85,93)
            line-height .266667rem
            margin-top .106667rem
    .sellers_delivery  
      padding 0rem .48rem 
      .sellers_item
        position relative
        width 100%
        display flex
        font-size .266667rem
        padding .48rem 0rem
        &:before
          content ''
          width 100%
          height 1px
          background rgba(7,17,27,.1)
          position absolute
          left 0
          top 0
        .sellers_amount
          flex-basis 30%
          padding .48rem 0rem
          display flex
          flex-flow column
          justify-content center
          align-items center
          .amount_num
            margin-bottom .213333rem
            color rgb(147,153,159)
          .delivery_num
            font-size .64rem
            font-weight 200
            color rgb(7,17,27)
            line-height .64rem
        .sellers_minimum
          flex-basis 33%
          position relative
          padding .48rem 0rem
          display flex
          flex-flow column
          justify-content center
          align-items center
          &:before
            content ''
            width 1px
            height 100%
            background rgba(7,17,27,.1)
            position absolute
            left 0
          &:after
            content ''
            width 1px
            height 100%
            background rgba(7,17,27,.1)
            position absolute
            right  0  
          .amount_num
            margin-bottom .213333rem  
            color rgb(147,153,159)
          .delivery_num
            font-size .64rem 
            font-weight 200
            color rgb(7,17,27)
            line-height .64rem 
        .sellers_tiems
          flex 1  
          padding .48rem 0rem
          display flex
          flex-flow column
          justify-content center
          align-items center
          .amount_num
            margin-bottom .213333rem
            color rgb(147,153,159)
            line-height .266667rem
          .delivery_num
            font-size .64rem
            font-weight 200
            color rgb(7,17,27)
            line-height .64rem
    .suportant  
      padding .48rem
      box-sizing border-box
      .suportant_title
        font-size .426667rem
        font-weight 700
        color rgb(7,17,27)
        line-height .373333rem
      .suportant_des
        font-size .32rem
        line-height .426667rem
        white-space pre-line
        font-weight 200
        color rgb(240,20,20)
        line-height .64rem
        margin-bottom .266667rem
      .suportant_activity
        .suportant_active_item
          display flex
          padding .48rem 
          border-top(#E6E7E8)
          .jian
            bg-image('./img/decrease_1')
            width .426667rem
            height .426667rem
            background-size 100% 100%
            background-repeat no-repeat
          .zhe
            bg-image('./img/invoice_1')
            width .426667rem
            height .426667rem
            background-size 100% 100%
            background-repeat no-repeat
          .te
            bg-image('./img/special_1')
            width .426667rem
            height .426667rem
            background-size 100% 100%
            background-repeat no-repeat
          .piao
            bg-image('./img/invoice_1')
            width .426667rem
            height .426667rem
            background-size 100% 100%
            background-repeat no-repeat
          .bao
            bg-image('./img/guarantee_1')
            width .426667rem
            height .426667rem
            background-size 100% 100%
            background-repeat no-repeat    
          .description
            font-size .32rem
            font-weight 200
            color rgb(7,17,27)      
            display flex
            justify-content center
            align-items center
            margin-left .08rem
    .info
      padding .48rem 
      box-sizing border-box
      .info_title
        font-size .426667rem
        font-weight 700
        margin-bottom .32rem
    .amend
      padding .48rem 
      box-sizing border-box
      .amend_title
        font-size .426667rem
        font-weight 700
        margin-bottom .32rem
      .amend_shoe
        width 100%  
        .amend_item
          border-top(#E6E7E8)
          padding .426667rem 0rem
          font-size .32rem
          font-weight 200
          color rgb(7,17,27)
          line-height .426667rem


      
        
        
      



            


           





        




</style>