const EnumItem = require('./enum/enumItem')
const EnumError = require('./enum/enumError')

function format(enumItemError) {
    if (enumItemError instanceof EnumError) {
        return enumItemError
    }
    if (enumItemError instanceof EnumItem) {
        return enumItemError.Error()
    }
    if (enumItemError.Error && typeof enumItemError.Error === 'function') {
        return enumItemError.Error()
    }
    return enumItemError
}

class Assert {

    ok(condition, enumItemError) {
        if (!condition) {
            throw format(enumItemError)
        }
    }

    fail(condition, enumItemError) {
        if (condition) {
            throw format(enumItemError)
        }
    }

    equal(a, b, enumItemError) {
        if (a !== b) {
            throw format(enumItemError)
        }
    }

    notEqual(a, b, enumItemError) {
        if (a === b) {
            throw format(enumItemError)
        }
    }

    deepEqual(a, b, enumItemError) {
        if (JSON.stringify(a) !== JSON.stringify(b)) {
            throw format(enumItemError)
        }
    }

    notDeepEqual(a, b, enumItemError) {
        if (JSON.stringify(a) === JSON.stringify(b)) {
            throw format(enumItemError)
        }
    }
}

module.exports = new Assert
