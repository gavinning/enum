const hasOwn = Object.prototype.hasOwnProperty
const toString = Object.prototype.toString

module.exports = {

    toUpperCaseFirst(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1)
    },

    isString(obj) {
        return typeof obj === 'string'
    },

    isNumber(obj) {
        return Number(obj) !== NaN
    },

    isFunction(obj) {
        return typeof obj === 'function'
    },

    isBoolean(obj) {
        return obj === true || obj === false
    },

    isEmptyObject(obj) {
        for (const name in obj) {
            return false
        }
        return true
    },

    isPlainObject(obj) {

        if (!obj || toString.call(obj) !== '[object Object]') {
            return false
        }

        const hasOwnConstructor = hasOwn.call(obj, 'constructor')
        const hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')
        // Not own constructor property must be Object
        if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
            return false
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        var key
        for (key in obj) {/**/ }

        return typeof key === 'undefined' || hasOwn.call(obj, key)
    },
}
