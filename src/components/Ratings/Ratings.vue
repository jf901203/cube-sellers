<template>
   <cube-scroll ref="scroll" class="scroll" :options="options">
      <div class="ratings_container">
          <div class="ratings_content">
            <div class="ratings_code">
            <div class="code_num">
              <div class="code_digit">{{sellers.deliveryPrice}}</div>
              <div class="code_rating">综合评分</div>
              <div class="code_good">高于周边商家{{sellers.rankRate}}%</div>
            </div>
            <div class="code_start">
              <div class="manner_start">
                <span class="manner">服务态度</span>
                <span class="starts">
                  <Start size="36" :code="sellers.foodScore"/>
                </span>
                <span class="manner_num">{{sellers.foodScore}}</span>
              </div>
              <div class="manner_start">
                <span class="manner">服务态度</span>
                <span class="starts">
                  <Start size="36" :code="sellers.score"/>
                </span>
                <span class="manner_num">{{sellers.score}}</span>
              </div>
              <div class="manner_start">
                <span class="manner">送达时间</span>
                <span class="minutes">{{sellers.deliveryTime}}分钟</span>
              </div>
            </div>
            </div>
            <div class="rating_line">
              <spaceLine />
            </div>
            <div class="ratings_rate_type">
                <div class="title">商品评价</div>
                <div class="rate_type">
                  <span class="rateType" :class="{bg:selecType===2}" @click="selecTypes(2)">
                    全部
                    <span>{{ratings.length}}</span>
                    </span>
                  <span class="rateType" :class="{bg:selecType===0}" @click="selecTypes(0)">
                    满意
                    <span>{{agreeCount}}</span>
                    </span>
                  <span class="rateType" :class="{bg:selecType===1}" @click="selecTypes(1)">
                    不满意
                    <span>{{ratings.length-agreeCount}}</span>
                    </span>
                </div>
                <div class="content_rate" >
                  <span class="iconfont icon-xuanzhong_" @click="tick" :class="{dians:isShow}"></span>
                  <span class="content_likes" :class="{dians:isShow}">只看有内容的评价</span>
                </div>
            </div>
            <div class="rate_list">
              <ul>
                <li class="ratt_list_child" v-for="(rating,index) in filtersArr" :key="index">
                  <div class="avatar">
                    <img :src="rating.avatar" alt="">
                  </div>
                  <div class="text">
                    <div class="rating_name">
                      <span class="username">{{rating.username}}</span>
                      <span class="rating_time">{{rating.rateTime | date-format}}</span>
                    </div>
                    <div class="rating_start">
                      <span class="rating_code">
                        <Start size="24" :code="rating.score"/>
                      </span>
                      <span class="arrive_time">{{rating.score}}</span>
                    </div>
                    <div class="rating_des">
                      <p class="description">
                        {{rating.text}}
                      </p>
                    </div>
                    <div class="rating_suportant">
                      <span class="iconfont icon-dianzan3 dian" v-if="rating.rateType===0"></span>
                      <span class="iconfont icon-dianzan2" v-else></span>
                      <span class="suportant"  v-for="(res,index) in rating.recommend" :key="index">{{res}}</span>
                    </div>
                  </div>
                </li>
                
              </ul>
            </div>
           
          </div>
        
      </div>
   </cube-scroll>
</template>

<script>
  import Start from 'components/Start/Start'
  import spaceLine from 'components/spaceLine/spaceLine'

import {mapState,mapGetters} from 'vuex'

export default {
data() {
return {
  selecType:2,
  isShow:false,
  // down:true,
  // 原生better-scroll中的options配置 options传递给better-scroll插件
  options:{
    click:false
  }
}
},

props:['data'],

methods:{
  selecTypes(num){
  //   if(this.down){
  //     this.down =false
  //     setTimeout(()=>{
  //       this.down =true
  //     },500)
    this.selecType=num
  },
  

// 解决自身调用两次的方法
  tick(){
    // if(this.down){
    //   this.down =false
    //   setTimeout(()=>{
    //     this.down =true
    //   },500)
    //   this.isShow=!this.isShow
    // }

   this.isShow=!this.isShow
    
  }

},

computed:{
  ...mapState(['sellers','ratings']),
  ...mapGetters(['agreeCount']),
  filtersArr(){
   const {ratings,isShow,selecType}=this
    return ratings.filter((item)=>{
     return (selecType===2 || selecType===item.rateType) && (!isShow || item.text.length>0)
    })

  }


},
components:{
  Start,
  spaceLine
}
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.scroll
  position relative
  height 100%
  .ratings_content
    width 100%
    .ratings_code
      padding .48rem .64rem
      box-sizing border-box
      width 100%
      display flex
      .code_num
        flex-basis  37%
        display flex
        flex-flow column
        justify-content center
        align-items center
        position relative
        &:after
          content ''
          display inline-block
          width 1px
          height 100%
          background rgba(7,17,27,.3)
          position absolute
          right 0
        .code_digit
          font-size .64rem
          color rgb(255,153,0)
          line-height .746667rem
        .code_rating
          margin .16rem 0rem .213333rem
          font-size .32rem
          color rgb(7,17,27)
          line-height .32rem
        .code_good
          font-size .266667rem
          color #93999F
          line-height .266667rem    
      .code_start
        flex 1
        padding-left .426667rem
        box-sizing border-box
        position relative
        .manner_start
          width 100%
          position relative
          .manner
            font-size .32rem
            color rgb(7,17,27)
            line-height .48rem
            margin-right .32rem
          .starts
            position absolute  
            top 50%
            transform translateY(-25%)
          .manner_num
            position absolute
            right 0
            font-size .32rem
            top 50%
            transform translateY(-25%)
            color rgb(255,153,0)
          .minutes
            font-size .32rem  
            color rgb(147,153,159)
    .ratings_rate_type  
      padding .48rem 
      box-sizing border-box 
      position relative
      &:after
        content ''
        display inline-block
        width 100%
        height 1px
        background rgba(7,17,27,.1)
        position absolute
        left 0
        bottom 0
      .rate_type
        padding .48rem 0rem
        position relative
        &:after
          content ''
          display inline-block
          width 100%
          height 1px
          background rgba(7,17,27,.1)
          position absolute
          left 0
          bottom 0
        .rateType
          display inline-block
          font-size 0.373333rem
          padding 0.426667rem
          margin-right 0.213333rem
          background rgba(77,85,93,0.2)
          color #4d555d
          border-radius 0.053333rem
          &.bg
            background #00A0DC
            color #fff
      .content_rate
        font-size .32rem   
        margin .32rem 0rem 0rem
        .content_likes
          font-size .32rem
          color rgb(147,153,159)
          line-height .64rem
          margin-left .106667rem
          &.dians
            color #00A0DC
        .icon-xuanzhong_
          font-size .64rem
          color rgb(147,153,159)
          line-height .64rem
          vertical-align middle 
          &.dians
            color #00A0DC
           
    .rate_list
      padding .48rem 
      .ratt_list_child
        display flex
        padding .48rem 0rem
        position relative
        &:not(:last-child):after
          content ''
          display inline-block
          width 100%
          height 1px
          background rgba(7,17,27,.1)
          position absolute
          left 0
          bottom 0
        .avatar
          flex-basis .746667rem
          height .746667rem
          border-radius 50%
          margin-right .32rem
          img
            width 100%
            height 100%
            border-radius 50%
        .text
          flex 1
          .rating_name
            display flex
            justify-content space-between
            align-items center
            .username
              font-size .32rem
              color rgb(7,17,27)
              line-height .32rem
            .rating_time
              font-size .266667rem
              font-weight 200
              color rgb(147,153,159)
              line-height .32rem
          .rating_start  
            display flex
            margin .106667rem 0rem
            .arrive_time
              font-size .266667rem
              font-size 200
              color rgb(147,153,159)
              line-height .32rem
              margin-left .16rem
          .rating_des
            .description
             font-size .32rem
             line-height .426667rem
             color rgb(7,17,27)
             white-space pre-line
          .rating_suportant
            margin-top .16rem   
            display flex
            flex-wrap wrap
            .dian
              font-size .32rem
              color rgb(0,160,220)
              line-height .426667rem
            .icon-dianzan2
              color rgb(183,187,191)   
            .suportant
              border 1px solid rgba(7,17,27,.1)
              border-radius .053333rem
              font-size .24rem
              color rgb(147,153,159)
              line-height .426667rem
              padding .16rem
              margin-left .16rem
              width 1.333333rem
              overflow hidden
              text-overflow ellipsis
              display inline-block
              margin-bottom 10px
              


             
            





</style>