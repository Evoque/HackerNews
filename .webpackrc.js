

const path = require('path');

module.exports = {
    extraBabelPlugins: [
        ["import", {"libraryName": "antd", "style": "css"}]
    ],
    alias: { 
        Components: path.resolve(__dirname, 'src/components/'), 
        Common: path.resolve(__dirname, 'src/common/'),
        Utils: path.resolve(__dirname, 'src/utils/')
    },
}
