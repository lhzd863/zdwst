const { override, fixBabelImports, addLessLoader } = require('customize-cra');
process.env.GENERATE_SOURCEMAP = "false";
const theme = require('./package.json').theme;
const path = require('path')

const addMd = () => config => {
    config.module.rules[2].oneOf.splice(0,1,{
      test: /\.md$/,
      use: "raw-loader"
    });
  return config;
};

const addImg = () => config => {
    config.module.rules[2].oneOf.splice(0,1,{
      test: [/\.JPG$/,/\.jpg$/,/\.png$/,/\.bmp$/,/\.gif$/],
      use: "url-loader"
    });
  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  addMd(),
);
