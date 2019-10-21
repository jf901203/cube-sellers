<template>

    <div slot="content" class="scroll-wrapper">
      <div class="demo">
        <cube-scroll
          ref="scroll"
          
          direction="horizontal"
          class="outer-horizontal-scroll"
          :options="picScrollOptions"

          v-if="items2.length>0"
          >
          <ul class="list-wrapper">
           
            <li v-for="(item,index) in items2" class="list-item inner-horizontal-scroll" :key="index"><img :src="item" alt=""></li>
          </ul>
        </cube-scroll>
      </div>
    </div>

</template>

<script type="text/ecmascript-6">


export default {
  data() {
    return {
      items2: this.data,
      picScrollOptions:{
        
          stopPropagation: true,
          directionLockThreshold:0
         
        }
    }
  },
  props:['data']
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.inner-horizontal-scroll  
  vertical-align: top
  width 0px
.outer-horizontal-scroll
.inner-horizontal-scroll
  border: 1px solid rgba(0, 0, 0, 0.1)
  border-radius: 5px
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  position: relative
  .cube-scroll-content
    display: inline-block
    vertical-align: top
  .list-wrapper
    line-height: 60px
    white-space: nowrap
  .list-item
    display: inline-block
    margin-right .266667rem
    width 2.4rem
    height 2.4rem
    img 
      width 100%
      height 100%
</style>