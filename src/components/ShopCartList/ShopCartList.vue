<template>
  <div>
    <transition name="fade">
     <cube-popup 
     type="my-popup" 
     :mask="true"
     v-show="isShow" 
     @mask-click="maskClick" 
     position="bottom"
    >
    <transition name="move"  @after-leave="afterLeave">
    <div v-show="isShow">
        <div class="cartClear">
          <span>购物车</span>
          <span class="qing" @click="clearCart">清空</span>
        </div>

        
          <cube-scroll
              ref="scroll"
              class="list-content"
              :data="cartFoods"
              v-if="cartFoods.length"
              >
              <ul>
                <li class="food" v-for="(item,index) in cartFoods" :key="index" >
                  <span class="title">{{item.name}}</span>
                  <span class="price">￥{{item.price}}</span>
                  <span class="cartControl">
                    <cartControl :food="item"/>
                  </span>
                </li>
              </ul>
            </cube-scroll>
        </div>
     </transition>
    </cube-popup>
  </transition>  
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
 import cartControl from 'components/cartControl/cartControl'
export default {
  name: 'shop-cart-list',
  data() {
    return {
      isShow:false
    }
  },

computed:{
  ...mapState(['cartFoods']),
  ...mapGetters(['getCount'])
},
  methods:{
    clearCart(){
     
     this.$createDialog({
        type: 'confirm',
        content: '确定清空购物车吗?',
        // 实例的事件回调函数对象
        $events:{
          confirm:()=>{
            this.$store.dispatch('clearCart',()=>{
              this.isShow=false
            })
          }
        }
      }).show()

      
    },
    show(){
      this.isShow=true
      this.$nextTick(()=>{
        this.$refs.scroll.refresh()
      })
    },
    hide(){
      this.isShow=false
      
    },
    maskClick(){
      this.hide()
      this.$emit('hides')
    },

    afterLeave(){
      this.$emit('leave')
    }
  },
  components:{
    cartControl
  }

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.cube-popup
  position fixed
  left 0
  right 0
  top 0
  bottom 48px
  z-index 9999
  &.fade-enter-active, &.fade-leave-active
    transition opacity .3s
  &.fade-enter, &.fade-leave-to
    opacity 0
  .move-enter-active, .move-leave-active   
    transition all .3s
  .move-evter, .move-leave-to   
    transform translate3d(0,100%,0) 
  .cartClear
    padding 0 18px
    height 1.066667rem
    background #f3f5f7
    line-height 1.066667rem
    font-size .373333rem
    font-weight 200
    color rgb(7,17,27)
    

    .qing
      float right
      color rgb(0,160,220)
      padding 0rem .16rem
  .cube-scroll-wrapper
    padding 0 18px
    max-height 217px
    overflow hidden
    background #fff
    .food
      margin-bottom .133333rem
      line-height 1.28rem
      height 1.28rem
      display flex
      font-size .426667rem
      position relative
      color red
      background #fff
      &:not(:last-child):after
        content ''
        display inline-block
        width 100%
        height .026667rem
        background rgba(7,17,27,.1)
        position absolute
        bottom 0

      .title
        flex-basis 50%  
      .price
        flex-basis 25%  
      .cartControl
        float right  
     

    
</style>