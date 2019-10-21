<template>
  <div>
    <div class="heade">
      <div class="head-container">
        <div class="head-content">
          <div class="head-avatar">
            <img class="avatar" src="./img/timg.jpg" alt="">
          </div>
          <div class="head-des">
            <h1 class="title">粥品想放(大运存)</h1>
            <div class="addre">蜂鸟转送/38m到达</div>
            <div class="pay">
              <Support size="1" type="0" class="jian"/>
                在线支付满28捡5，满50剑10
              </div>
          </div>
         
        </div>
         <div class="count">5个</div>
         <div class="bulletin" @click="show">
            
            <p class="bulletin-content">
              <span class="bulletin-img"></span>
              顾名思意就是R+G+B+A的颜色，再具体点就是RED+GREEN+BLUE+ALPHA的颜色</p>
            <span class="arrow iconfont icon-ios-arrow-forward"></span>
          </div>
      </div>
      
      <div class="head-mask"></div>
      
    </div>
    <HeadDetial ref="detail"/>
  </div>
</template>

<script>
import Support  from 'components/Support/Support'
import HeadDetial  from 'components/HeadDetial/HeadDetial'
export default {
data() {
return {

}
},
methods:{
  show(){
    this.$refs.detail.show()
  }
},
components:{
  Support,
  HeadDetial
}
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
.heade
  width 100%
  height 3.573333rem
  position relative
  
  .head-mask
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    bottom 0
    background url('./img/timg.jpg')
    background-size 100% 100%
    background-repeat  no-repeat
    filter: blur(3px)
    z-index -1
  .head-container
    width 100%
    height 100%
    background $color-background-ss
    color $color-white
    position relative
    .head-content
      display flex
      padding .64rem .32rem .48rem .64rem
      box-sizing border-box
      .head-avatar
        .avatar
          width 1.706667rem
          height 1.706667rem
          border-radius .053333rem
      .head-des
        flex 1 
        margin-left .426667rem 
        font-size 0
        .title
          font-size .426667rem
          color $color-white
          font-weight bold
          line-height .48rem
          position relative
          &::before
            content '品牌'
            display inline-block
            background red
            padding .053333rem
            margin-right .16rem
            font-size .266667rem
        .addre
          margin-top .213333rem
          margin-bottom .266667rem
          font-size .32rem
          font-weight 200
          line-height .32rem    
        .pay
          font-size .266667rem  
          line-height .32rem
        .jian
          vertical-align middle
    .count
      position absolute
      top 53%  
      right 7%  
      font-size .266667rem
      padding .133333rem .4rem 
      line-height .32rem
      font-weight 200
      color #ffffff
      border-radius .133333rem 
      background-color rgba(0,0,0,.2)
      &:after
        content '>'
        position absolute
        right .08rem
    .bulletin
      background rgba(7,17,27,.2)
      width 100%
      height .746667rem
      padding-left .32rem
      position relative
      box-sizing border-box
      .bulletin-content
        width 8.533333rem
        font-size .32rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        line-height .746667rem
        font-weight 200
        .bulletin-img
          bg-image('bulletin')
          background-size 100% 100%
          background-repeat no-repeat
          width .8rem
          height .48rem
          vertical-align middle
          display inline-block
      .arrow
        color #000 
        font-size .32rem 
        position absolute
        right .8rem
        line-height .746667rem
        color #fff
        top 0
       
        


        





</style>