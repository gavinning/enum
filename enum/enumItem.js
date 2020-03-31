const lib = require('./lib')

class EnumItem {
    constructor(key, rawValue) {
        this.$createEnumItem(key, rawValue)
    }

    Error(message) {
        return require('./enumError').init({
            ...this,
            message: message || this.message,
        })
    }

    Encode() {
        return this.$rawValue
    }

    $createEnumItem(key, rawValue) {
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
        for (const name in rawValue) {
            Object.defineProperty(this, name, {
                writable: false,
                enumerable: true,
                value: rawValue[name],
            })
        }
    }
}

module.exports = EnumItem
