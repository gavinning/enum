const assert = require('assert')
const EnumError = require('../enum/enumError')

describe('class EnumError test', () => {

    it('test constructor', () => {
        const err = new EnumError({
            a: 1,
            b: 2,
            c: 3,
        })

        assert.ok(err instanceof Error)
        assert.ok(err instanceof EnumError)

        assert.equal(1, err.a)
        assert.equal(2, err.b)
        assert.equal(3, err.c)
    })

    it('test constructor 2', () => {
        const err = new EnumError({
            code: 404,
            message: 'Not Found'
        })

        assert.ok(err instanceof Error)
        assert.ok(err instanceof EnumError)

        assert.equal(404, err.code)
        assert.equal('Not Found', err.message)
    })

    it('test Encode', () => {
        const err = new EnumError({
            code: 404,
            message: 'Not Found'
        })
        const result = err.Encode()
        assert.equal(404, result.code)
        assert.equal('Not Found', result.message)
    })

    it('test Encode 2', () => {
        const err = new EnumError({
            code: 404,
            message: 'Not Found'
        })
        const result = err.Encode({ ResponseId: 'F77C5A9D-39F4-4E7B-941E-1955B9DB8744' })
        assert.equal(404, result.code)
        assert.equal('Not Found', result.message)
        assert.equal('F77C5A9D-39F4-4E7B-941E-1955B9DB8744', result.ResponseId)
    })
})
