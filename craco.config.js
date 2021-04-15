const cracoPluginLess = require('next-plugin-antd-less/overrideWebpackConfig');

module.exports = {
  babel: cracoBabel,
  plugins: [
    cracoPluginAnalyze,
    {
      plugin: cracoPluginLess,
      options: {
        modifyVars: {
        },
        lessVarsFilePath: './styles/variables.less',
      },
    },
  ],
};