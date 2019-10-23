
import Vue from 'vue'
import {createAPI} from 'cube-ui'

import ShopCartList from 'components/ShopCartList/ShopCartList'
import ShopCartStiky from 'components/ShopCartStiky/ShopCartStiky'
import foodDetail from 'components/foodDetail/foodDetail'
// ShopCartList组件变成api组件 以api形式声明组件

createAPI(Vue, ShopCartList)
createAPI(Vue, ShopCartStiky)
createAPI(Vue, foodDetail)