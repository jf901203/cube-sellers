<template>
    <transition name="fade">
      <div class="detail-container" v-show="isShow" >
        <div class="detail-title">
          <h1>粥品想放(大运存)</h1>
        </div>
        <div class="start">
          <Start :size="48" :code="4.5"/>
        </div>
        <div class="line">
          <h1 class="line-title">优惠信息</h1>
        </div>
        <div class="support">
          <ul>
            <li class="support-item">
              <span class="item-avatar"><Support size="1" type="0"/></span>
              <span class="des">在线支付满28捡5，满50剑10</span>
            </li>
              <li class="support-item">
              <span class="item-avatar"><Support size="1" type="0"/></span>
              <span class="des">在线支付满28捡5，满50剑10</span>
            </li>
          </ul>
        </div>
        <div class="line">
          <h1 class="line-title">商家公告</h1>
      
        </div>
        <div class="descript">
          通过以上实例发现，其实我们想要达到的效果更确切地说是闭合浮动
          ，而不是单纯的清除浮动，在footer上设置clear：both清除浮动并不能解决wrap
          高度塌陷的问题。
        </div>
        <div class="close" @click="show">
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
   </transition>
</template>

<script>
import Start  from 'components/Start/Start'
import Support  from 'components/Support/Support'
export default {
  data() {
    return {
     isShow:false
    }
  },
  methods:{
    show(){
      this.isShow=!this.isShow
    }
  },
  components:{
    Start,
    Support
  }

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
 @import "~common/stylus/mixin"
 @import "~common/stylus/variable"
.detail-container
  position fixed
  top 0
  left 0
  right  0
  bottom 0
  background $color-background-s
  color #fff
  padding 0rem .96rem
  box-sizing border-box
  z-index 1000
  &.fade-enter-active, &.fade-leave-active
    transition all .3s
  &.fade-enter, &.fade-leave-to
    opacity 0  
    background: $color-background
  .detail-title
    width 100%
    margin-top 1.706667rem
    margin-bottom .426667rem
    h1
      text-align center
      line-height .426667rem
      font-weight 700
      font-size .426667rem     
.start
  width 100%  
  text-align center 
.line
  color #fff
  width 100%
  text-align center
  margin-top .746667rem
  position relative
  border-bottom 1px solid rgba(255, 255, 255, 0.2)
  height .8rem
  margin-bottom .64rem
  .line-title
    position absolute
    top 50%
    left 50%
    transform translateX(-50%)
    background #384048
    padding .133333rem
.support
  .support-item
    list-style 30px
    .item-avatar
      vertical-align middle
    .des
      font-size .32rem
      margin-left .16rem
      line-height .32rem
.clear
  clear both   
.descript
  font-size .373333rem
  line-height .64rem  
.close
  position absolute
  bottom .853333rem
  left 50%  
  transform translateX(-50%)
  width 1.333333rem
  height 1.333333rem
  line-height 1.333333rem
  text-align center
   
      
      
</style>