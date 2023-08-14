const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
        './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/components/ProductCard.html'),
        './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.html'),
        './html/LoginModal.html': path.resolve(__dirname, 'template/js/custom-js/components/LoginModal.html'),
        './html/TheAccount.html': path.resolve(__dirname, 'template/js/custom-js/components/TheAccount.html'),
        './js/TheAccount.js': path.resolve(__dirname, 'template/js/custom-js/components/TheAccount.js')
    }
  }
})
