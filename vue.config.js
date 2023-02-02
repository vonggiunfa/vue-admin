// https://cli.vuejs.org/zh/config
module.exports = {
  //configureWebpack
  devServer: {
    proxy: "http://admin.dev.wasatoy.com/api",
  },
};
