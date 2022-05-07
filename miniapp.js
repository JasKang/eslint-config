module.exports = {
  extends: [require.resolve('./basic')],
  globals: {
    // 全局
    global: 'readonly',
    // 小程序全局
    wx: true,
    getApp: true,
    App: true,
    Page: true,
    Component: true,
    getCurrentPages: true,
    requirePlugin: 'readonly',
    requireMiniProgram: 'readonly',
  },
  rules: {},
}
