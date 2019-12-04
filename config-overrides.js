const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: true,
    }), addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#c41d7f' },
    })
);
