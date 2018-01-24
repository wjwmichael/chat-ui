module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-color-function': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions'],
      features: { customProperties: false },
    }
  }
}