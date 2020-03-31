const lib = require('./lib')
const EnumItem = require('./enumItem')
const EnumError = require('./enumError')

class Enum {

    // @param {Object} enums
    constructor(enums = {}) {
        if (!lib.isPlainObject(enums)) {
            throw Error('enums must be a plain object')
        }
        this.extend(enums)
    }

    has(enumItem) {
        return enumItem === this[enumItem.$key]
    }

    append(key, value) {
        key = lib.toUpperCaseFirst(key)
        Object.defineProperty(this, key, {
            writable: false,
            enumerable: true,
            value: new EnumItem(key, value),
        })
        return this[key]
    }

    extend(enums) {
        for (const name in enums) {
            this.append(name, enums[name])
        }
    }

    static get EnumItem() {
        return EnumItem
    }

    static get EnumError() {
        return EnumError
    }
}

module.exports = Enum
