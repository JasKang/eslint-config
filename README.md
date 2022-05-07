# eslint-config-jaskang

提供风格统一的 eslint 配置

## eslint config

# 安装

```shell
npm i eslint-config-jaskang -D
```

# 配置

项目 .eslintrc.js 中使用

```javascript
// 通用场景
module.exports = { extends: ['jaskang'] }
// vue
module.exports = { extends: ['jaskang/vue'] }
// 小程序
module.exports = { extends: ['jaskang/miniapp'] }
```

## prettier config

项目 .prettierrc.js 中使用配置

```javascript
const prettier = require('eslint-config-jaskang/prettier')

module.exports = prettier
```
