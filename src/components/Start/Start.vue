<template>
  <div>
    <div :class="`start-${size}`">
      <span class="item-start" :class="item" v-for="(item,index) in classMap" :key="index"></span>
    </div>
    
    
  </div>
</template>

<script>

export default {

 props:['size','code'],
 computed:{
   classMap(){
     const {code,size} = this
     const on=`star${size}_on` 
      const half=`star${size}_half`
      const off=`star${size}_off`
     const arr=[]
     const int=Math.floor(code)
     const flo=code*10-int*10
     for(let i=0;i<int;i++){
       arr.push(on)
     }
     if(flo>=5){
        arr.push(half)
     }
     while(arr.length<5){
        arr.push(off)
     }
     return arr  
   }
 }
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import "~common/stylus/mixin"
.start-24
  display: flex
  align-items: center
  justify-content: center
  .item-start
    width .266667rem
    height .266667rem
    display inline-block
    background-size .266667rem .266667rem
    background-repeat no-repeat
    margin-right .08rem
    &:last-child
      margin-right 0
    &.star24_on
      bg-image('star24_on')
    &.star24_half
      bg-image('star24_half')
    &.star24_off
      bg-image('star24_off')    
.start-36
  display: flex
  align-items: center
  justify-content: center
  .item-start
    width .4rem
    height .4rem
    display inline-block
    background-size .4rem .4rem
    background-repeat no-repeat
    margin-right .16rem
    &:last-child
      margin-right 0
    &.star36_on
      bg-image('star36_on')
    &.star36_half
      bg-image('star36_half')
    &.star36_off
      bg-image('star36_off') 
.start-48
  display: flex
  align-items: center
  justify-content: center
  .item-start
    width .533333rem
    height .533333rem
    display inline-block
    background-size .533333rem .533333rem
    background-repeat no-repeat
    margin-right .533333rem
    &:last-child
     margin-right 0
    &.star48_on
      bg-image('star48_on')
    &.star48_half
      bg-image('star48_half')
    &.star48_off
      bg-image('star48_off')               
    
</style>