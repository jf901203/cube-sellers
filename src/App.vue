<template>
  <div id="app">
    
    <Head/>
    <div class="tab-wrapper">
      <Tabs :tabs="tabs"/>
    </div>
  </div>
</template>
<script>
import Head from 'components/Head/Head'
import Tabs from 'components/Tabs/Tabs'

import Ratings from 'components/Ratings/Ratings'
import Goods from 'components/Goods/Goods'
import Sellers from 'components/Sellers/Sellers'



import { mapState,mapActions } from "vuex";
export default {
  data() {
    return {
      
    }
  },
  mounted(){
    
   this.getSeller()
   this.getGoods()
   this.getRatings()
  },
  methods:{
    ...mapActions(['getSeller','getGoods','getRatings'])
  },
  computed:{
    tabs(){
      return[
          {
            label: '商品',
            component:Goods,
            data:this.goods
          },
          {
            label: '评价',
            component:Ratings,
            data:this.ratings
          }, 
          {
            label: '商家',
            component:Sellers,
            data:this.sellers
          }
      ]
      
    },
    ...mapState(['sellers','ratings','goods'])
  },
  components:{
    Head,
    Tabs

  }
  
}

</script>

<style lang="stylus">
.tab-wrapper
  position: fixed
  top: 3.626667rem
  left: 0
  right: 0
  bottom: 0
</style>
