var checkOptions = require('./lib/checkoptions')

module.exports = function featurePolicy (options) {
  checkOptions(options)

  return function featurePolicy (req, res, next) {
    res.setHeader('Feature-Policy', policy)
    next()
  }
}
