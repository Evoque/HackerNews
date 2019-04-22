

const path = require('path');

module.exports = {
    extraBabelPlugins: [
        ["import", {"libraryName": "antd", libraryDirectory: 'es', style: true }]
    ],
    alias: {
        Components: path.resolve(__dirname, 'src/components/'),
        Common: path.resolve(__dirname, 'src/common/'),
        Utils: path.resolve(__dirname, 'src/utils/'),
        Assets: path.resolve(__dirname, 'src/assets/')
    },
    theme: {
        'primary-color': '#ff6600', 
    } 
}
