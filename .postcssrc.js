module.exports = {
  "plugins": {
    'postcss-pxtorem-include': {
      include: 'src/*', // 制定转换的目录
      rootValue: 12, // 根元素字体大小
      unitPrecision: 6, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除).
      propList: ['*'],
      selectorBlackList: ['html'],
    },
  }
}
