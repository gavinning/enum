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
        Object.keys(value).map(key => {
            Object.defineProperty(this, key, {
                writable: false,
                enumerable: true,
                value: value[key],
            })
        })
    }

    Encode() {
        return this.$rawValue
    }

    static init(value) {
        return new EnumError(value)
    }
}

module.exports = EnumError
