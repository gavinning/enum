const assert = require('assert')
const EnumItem = require('../enum/enumItem')
const EnumError = require('../enum/enumError')

describe('class EnumItem test', () => {

    it('test constructor', () => {
        const enumItem = new EnumItem('app', 'application')

        assert.equal('app', enumItem.$key)
        assert.equal('application', enumItem.rawValue)
        assert.equal('application', enumItem.$rawValue)
    })

    it('test constructor', () => {
        const rawValue = { a: 1, b: 2 }
        const enumItem = new EnumItem('app', rawValue)

        assert.equal('app', enumItem.$key)
        assert.equal(undefined, enumItem.rawValue)
        assert.equal(rawValue, enumItem.$rawValue)

        assert.equal(rawValue.a, enumItem.a)
        assert.equal(rawValue.b, enumItem.b)
    })

    it('test Encode', () => {
        const rawValue = { a: 1, b: 2 }
        const enumItem = new EnumItem('app', rawValue)
        const result = enumItem.Encode()

        assert.notEqual(result, enumItem)
        assert.notEqual(result, enumItem.rawValue)
        assert.notEqual(result, enumItem.$rawValue)

        assert.deepEqual(result, enumItem.$rawValue)
    })

    it('test Encode 2', () => {
        const rawValue = { a: 1, b: 2 }
        const enumItem = new EnumItem('app', rawValue)
        const result = enumItem.Encode({ c: 3 })

        assert.notEqual(result, enumItem)
        assert.notEqual(result, enumItem.rawValue)
        assert.notEqual(result, enumItem.$rawValue)

        assert.deepEqual(result, { ...rawValue, c: 3 })
    })

    it('test Error', () => {
        const rawValue = { a: 1, b: 2 }
        const enumItem = new EnumItem('app', rawValue)

        const err = enumItem.Error()

        assert.ok(err instanceof Error)
        assert.ok(err instanceof EnumError)

        assert.equal(1, err.a)
        assert.equal(2, err.b)
    })

    it('test Error 2', () => {
        const rawValue = { a: 1, b: 2 }
        const enumItem = new EnumItem('app', rawValue)

        const err = enumItem.Error('error message')

        assert.ok(err instanceof Error)
        assert.ok(err instanceof EnumError)

        assert.equal(1, err.a)
        assert.equal(2, err.b)
        assert.equal('error message', err.message)
    })

    it('test isEqual, isNotEqual', () => {
        const rawValue = { a: 1, b: 2 }
        const enumItem = new EnumItem('app', rawValue)

        assert.ok(enumItem.isEqual(rawValue))
        assert.ok(!enumItem.isNotEqual(rawValue))
    })

    it('test isDeepEqual, isNotDeepEqual', () => {
        const rawValue = { a: 1, b: 2 }
        const copyValue = { a: 1, b: 2 }
        const enumItem = new EnumItem('app', rawValue)

        assert.ok(enumItem.isDeepEqual(rawValue))
        assert.ok(!enumItem.isNotDeepEqual(copyValue))
    })
})
