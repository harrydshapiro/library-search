
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./test-tsdx.cjs.production.min.js')
} else {
  module.exports = require('./test-tsdx.cjs.development.js')
}
