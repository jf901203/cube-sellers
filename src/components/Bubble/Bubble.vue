<template>
  <div class="bubble">
    {{num}}
  </div>
</template>

<script>
export default {
props:['num']

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.bubble
  display inline-block
  padding 0 .133333rem
  line-height .426667rem
  height .426667rem
  text-align center
  font-size .266667rem
  border-radius 50%
  background linear-gradient(#0066FF,#99CCCC)
  color #fff
</style>