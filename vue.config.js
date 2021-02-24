module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      externals: ["sequelize"]
    }
  }
};
