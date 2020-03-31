const lib = require('./lib')

class EnumError extends Error {
    constructor(value) {
        if (!lib.isPlainObject(value)) {
            throw Error('value must be a plain object')
        }
        super(value.message || 'SomeError')
        Object.defineProperty(this, '$rawValue', {
            writable: false,
            enumerable: false,
            value
        })
        this.$createEnumError(value)
    }

    Encode() {
        return this.$rawValue
    }

    $createEnumError(obj) {
        for (const name in obj) {
            Object.defineProperty(this, name, {
                writable: false,
                enumerable: true,
                value: obj[name],
            })
        }
    }

    static init(value) {
        return new EnumError(value)
    }
}

module.exports = EnumError
