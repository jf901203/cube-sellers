
const data=require('./data.json')
const seller=data.seller
const goods=data.goods
const ratings=data.ratings

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    // app是express 后端的路由对应的是一个处理http请求的回调函数
    before(app) {
      app.get('/api/seller', (req, res) => {

          const id =req.query.id
          res.json({
              code: 0,
              data: Object.assign({},seller,{id})
          })
      })
      app.get('/api/goods', (req, res) => {
        res.json({
            code: 0,
            data: goods
        })
    })
    app.get('/api/ratings', (req, res) => {
      res.json({
          code: 0,
          data: ratings
      })
  })


    
}


},

  lintOnSave: true,
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common',resolve('src/common'))
      .set('views',resolve('src/views'))
      .set('components',resolve('src/components'))
      .set('router',resolve('src/router'))
      .set('store',resolve('src/store'))
      .set('api',resolve('src/api'))
      .set('api',resolve('src/stylus'))
     
  }



}
