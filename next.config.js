const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // // optional
  modifyVars: { '@primary-color': '#6C5DD3' },
  // optional
  lessVarsFilePath: './styles/variables.less',
  // optional
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
