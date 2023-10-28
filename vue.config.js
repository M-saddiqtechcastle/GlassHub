const path = require("path")
const vueSrc = "./src"
module.exports = {
  publicPath: "/", //process.env.NODE_ENV === "production" ? "./" : "/",
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
  css: {
    sourceMap: true,
  },
}
/*
module.exports = {
  publicPath: "/",
} */
