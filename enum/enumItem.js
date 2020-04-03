const lib = require('./lib')

class EnumItem {
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

    Encode() {
        return this.$rawValue
    }

    Error(message) {
        const rawValue = this.Encode()
        return require('./enumError').init({
            ...rawValue,
            message: message || rawValue.message
        })
    }

    static init(key, rawValue) {
        return new EnumItem(key, rawValue)
    }
}

module.exports = EnumItem
