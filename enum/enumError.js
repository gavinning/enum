const lib = require('./lib')

class EnumError {
    constructor(item) {
        if (!lib.isPlainObject(item)) {
            throw Error('item must be a plain object')
        }
        this.$createEnumError(item)
    }

    Encode() {
        let encoded = { ...this }
        delete encoded.stack
        return encoded
    }

    $createEnumError(item) {
        for (const name in item) {
            Object.defineProperty(this, name, {
                writable: false,
                enumerable: true,
                value: item[name],
            })
        }
    }

    static init(item) {
        return new EnumError(item)
    }
}

module.exports = EnumError
