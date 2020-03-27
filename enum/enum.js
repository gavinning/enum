const lib = require('./lib')
const EnumItem = require('./enumItem')

class Enum {

    constructor(enums) {
        if (!lib.isPlainObject(enums)) {
            throw Error('enums must be a plain object')
        }
        Object.defineProperty(Enum.prototype, '$createEnum', {
            writable: false,
            enumerable: false,
            value: function $createEnum(enums) {
                for (const name in enums) {
                    const key = lib.toUpperCaseFirst(name)
                    Object.defineProperty(this, key, {
                        writable: true,
                        enumerable: true,
                        value: new EnumItem(key, enums[name]),
                    })
                }
            }
        })
        this.$createEnum(enums)
    }

    has(enumItem) {
        return enumItem === this[enumItem.$key]
    }

    static get EnumItem() {
        return EnumItem
    }
}

module.exports = Enum
