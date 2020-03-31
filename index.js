const Enum = require('./enum/enum')
const EnumItem = require('./enum/enumItem')
const EnumError = require('./enum/enumError')

module.exports = (plainObject) => new Enum(plainObject)
module.exports.Enum = Enum
module.exports.EnumItem = EnumItem
module.exports.EnumError = EnumError
