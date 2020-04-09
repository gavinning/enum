const assert = require('assert')
const lib = require('../enum/lib')

describe('lib test', () => {

    it('test clone', () => {
        const obj = {a: 1}
        const cloned = lib.clone(obj)
        assert.notEqual(obj, cloned)
        assert.deepEqual(obj, cloned)
    })

    it('test toUpperCaseFirst', () => {
        const str = 'abc'
        const result = lib.toUpperCaseFirst(str)
        assert.equal('Abc', result)
    })

    it('test isEmptyObject', () => {
        assert.ok(lib.isEmptyObject({}))
        
        assert.ok(!lib.isEmptyObject({ a: 1 }))
    })

    it('test isPlainObject', () => {
        assert.ok(lib.isPlainObject({}))
        assert.ok(lib.isPlainObject({a: 1}))

        assert.ok(!lib.isPlainObject(1))
        assert.ok(!lib.isPlainObject('a'))
        assert.ok(!lib.isPlainObject(true))
        assert.ok(!lib.isPlainObject(assert))
        assert.ok(!lib.isPlainObject([1, 2, 3]))
    })
})
