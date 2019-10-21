<template>
  <div class="space_line">

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.space_line
  width 100%
  height .426667rem
  background #f3f5f7
  position relative
  &:after
    content ''
    display inline-block
    width 100%
    height 1px
    position absolute
    bottom  0
    left 0
    background rgba(7,17,27,.1)
  &:before
    content ''
    display inline-block
    width 100%
    height 1px
    position absolute
    top 0
    left 0
    background rgba(7,17,27,.1)  

    
</style>