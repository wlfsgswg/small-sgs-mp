module.exports = {
  outputDir: "sgs-dist", // 自定义的dist文件夹名
  publicPath: "/mp_sgs/",
  filenameHashing: true, // 启用文件名哈希
  indexPath: "index.html",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        // target: "https://qifumoni.com/",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  // 此处可以修改antd主题颜色
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1DA57A",
          "link-color": "#1DA57A",
          "border-radius-base": "2px",
        },
        javascriptEnabled: true,
      },
    },
  },
};
