class Assert {

    ok(condition, enumItemError) {
        if (!condition) {
            throw enumItemError
        }
    }

    fail(condition, enumItemError) {
        if (condition) {
            throw enumItemError
        }
    }

    equal(a, b, enumItemError) {
        if (a !== b) {
            throw enumItemError
        }
    }

    notEqual(a, b, enumItemError) {
        if (a === b) {
            throw enumItemError
        }
    }

    deepEqual(a, b, enumItemError) {
        if (JSON.stringify(a) !== JSON.stringify(b)) {
            throw enumItemError
        }
    }

    notDeepEqual(a, b, enumItemError) {
        if (JSON.stringify(a) === JSON.stringify(b)) {
            throw enumItemError
        }
    }
}

module.exports = new Assert
