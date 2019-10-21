<template>

  <div class="tabs">
    <cube-tab-bar 
    v-model="selectedLabel" 
    :show-slider="true" 
    :use-transition="true" 
    :data="tabs"
    ref="tabBar"
    :useTransition="false"
    >
    </cube-tab-bar>
    
    <div class="slide-wrapper">
      <cube-slide 
      :loop="false" 
      :auto-play="false" 
      :show-dots="false"
      :initial-index="index"
      ref="slide"
      @change="onChange"
      @scroll="onScroll"
      :options="slideOptions"
      >
        <cube-slide-item v-for="(tab,index) in tabs" :key="index">
          <!-- 动态绑定组件 -->
          <component :is="tab.component" :data="tab.data" ref="component"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
</div>  
</template>

<script>

import { Transform } from 'stream';
export default {
  data () {
    return {
      index:0,
      slideOptions: {
          listenScroll: true,
          probeType: 3,
          directionLockThreshold:0
        }
     
    }  
  },
  props:['tabs'],
  computed:{
  // 计算得到一个新的变量
   selectedLabel:{
     get(){
       return this.tabs[this.index].label
     },
    //  监视这个变量的变化 
     set(val){ 
       this.index=this.tabs.findIndex((item)=>{
         return item.label===val
       })
     }
   }


  },
  methods:{
    onChange(current){
      this.index=current
      
    },
    onScroll({x,y}){
    // 滑动的距离 = 滑动的X坐标 / 滑动区域宽度 * tab导航栏宽度
     const wid=this.$refs.tabBar.$el.clientWidth
     const slideWidth = this.$refs.slide.slide.scrollerWidth
     const  posX=Math.abs(x)
     const  transformX=posX/slideWidth*wid
     this.$refs.tabBar.setSliderTransform(transformX)

    }
  }
  
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.tabs
  margin-top .053333rem
  display: flex
  flex-direction: column
  height: 100%
  .cube-tab
    padding .266667rem 0rem
    font-size .373333rem
  .slide-wrapper
    flex: 1
    overflow: hidden  

</style>