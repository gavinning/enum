const assert = require('assert')
const Enum = require('../enum/enum')
const EnumItem = require('../enum/enumItem')

describe('class Enum test', () => {

    it('test constructor', () => {
        const App = new Enum({
            name: 'Alipay',
            description: 'alipay description'
        })

        assert.ok(App.name instanceof EnumItem)
        assert.ok(App.description instanceof EnumItem)

        assert.equal('Alipay', App.name.rawValue)
        assert.equal('Alipay', App.name.$rawValue)
        assert.equal('alipay description', App.description.rawValue)
        assert.equal('alipay description', App.description.$rawValue)

        assert.equal('name', App.name.$key)
        assert.equal('description', App.description.$key)

        assert.equal('Alipay', App.name.Encode())
        assert.equal('alipay description', App.description.Encode())
    })

    it('test constructor 2', () => {
        const App = new Enum({
            alipay: {
                name: 'Alipay',
                description: 'alipay description'
            },

            wechat: {
                name: 'Wechat',
                description: 'wechat description'
            }
        })

        assert.equal('Alipay', App.alipay.name)
        assert.equal('alipay description', App.alipay.description)

        assert.notEqual(App.alipay, App.alipay.Encode())
        assert.deepEqual(App.alipay, App.alipay.Encode())
    })

    it('test $append', () => {
        const App = new Enum({
            wechat: {
                name: 'Wechat',
                description: 'wechat description'
            }
        })

        App.$append('alipay', {
            name: 'Alipay',
            description: 'alipay description'
        })

        assert.equal('Alipay', App.alipay.name)
        assert.equal('alipay description', App.alipay.description)

        assert.notEqual(App.alipay, App.alipay.Encode())
        assert.deepEqual(App.alipay, App.alipay.Encode())
    })

    it('test $extend', () => {
        const App = new Enum({
            baidu: {
                name: 'Baidu',
                description: 'baidu description'
            }
        })

        App.$extend({
            alipay: {
                name: 'Alipay',
                description: 'alipay description'
            },

            wechat: {
                name: 'Wechat',
                description: 'wechat description'
            }
        })

        assert.equal('Alipay', App.alipay.name)
        assert.equal('alipay description', App.alipay.description)

        assert.notEqual(App.alipay, App.alipay.Encode())
        assert.deepEqual(App.alipay, App.alipay.Encode())
    })
})
