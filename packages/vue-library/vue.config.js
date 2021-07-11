function getProdExternals() {
  return {
    'react-dom': 'react-dom',
    react: 'react'
  };
}

module.exports = {
  lintOnSave: false,
   configureWebpack: {
    externals: process.env.NODE_ENV === 'production' ?
      getProdExternals() : {}
  }
}
