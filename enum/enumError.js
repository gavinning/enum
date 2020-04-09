const lib = require('./lib')

class EnumError extends Error {
    /**
     * @param {Object} obj 
     */
    constructor(obj) {
        if (!lib.isPlainObject(obj)) {
            throw Error('obj must be a plain object')
        }
        super(obj.message || 'SomeError')
        Object.defineProperty(this, '$rawValue', {
            writable: false,
            enumerable: false,
            value: obj,
        })
        Object.keys(obj).map(key => {
            Object.defineProperty(this, key, {
                writable: false,
                enumerable: true,
                value: obj[key],
            })
        })
    }

    Encode(obj) {
        if (lib.isPlainObject(this.$rawValue)) {
            return { ...this.$rawValue, ...obj }
        }
        return lib.clone(this.$rawValue)
    }

    /**
     * @param {Object} obj 
     */
    static init(obj) {
        return new EnumError(obj)
    }
}

module.exports = EnumError
