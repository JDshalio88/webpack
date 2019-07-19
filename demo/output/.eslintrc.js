module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "linebreak-style": ["off", "window"], //换行符设置
        "comma-dangle": ["error", "never"], // 要求或禁止末尾逗号：不允许逗号
        "indent": ["error", 4], // JavaScript代码强制使用一致的缩进：4格缩进
    },
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    }
};