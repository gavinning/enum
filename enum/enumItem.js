const lib = require('./lib')
const EnumError = require('./enumError')

class EnumItem {
    /**
     * @param {String} key 
     * @param {any} rawValue 
     */
    constructor(key, rawValue) {
        Object.defineProperty(this, '$key', {
            value: key,
            writable: false,
            enumerable: false,
        })
        Object.defineProperty(this, '$rawValue', {
            value: rawValue,
            writable: false,
            enumerable: false,
        })
        if (!lib.isPlainObject(rawValue)) {
            return this.rawValue = rawValue
        }
        Object.keys(rawValue).map(key => {
            Object.defineProperty(this, key, {
                writable: false,
                enumerable: true,
                value: rawValue[key],
            })
        })
    }

    /**
     * @param {Object} obj 
     * @return {Object}
     */
    Encode(obj) {
        if (lib.isPlainObject(this.$rawValue)) {
            return { ...this.$rawValue, ...obj }
        }
        return lib.clone(this.$rawValue)
    }

    /**
     * @param {String} message 
     * @return {EnumError}
     */
    Error(message) {
        const rawValue = this.Encode()
        return EnumError.init({
            ...rawValue,
            message: message || rawValue.message
        })
    }

    isEqual(obj) {
        return obj === this.$rawValue
    }

    isNotEqual(obj) {
        return obj !== this.$rawValue
    }

    isDeepEqual(obj) {
        return JSON.stringify(obj) === JSON.stringify(this.$rawValue)
    }

    isNotDeepEqual(obj) {
        return JSON.stringify(obj) !== JSON.stringify(this.$rawValue)
    }

    /**
     * @param {String} key
     * @param {any} rawValue
     */
    static init(key, rawValue) {
        return new EnumItem(key, rawValue)
    }
}

module.exports = EnumItem
