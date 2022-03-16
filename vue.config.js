const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    host:"localhost",
    open:true
  },
  transpileDependencies: true
})
