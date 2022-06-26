
const path = require('path')
export  default {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}