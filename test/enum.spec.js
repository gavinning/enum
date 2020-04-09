const assert = require('assert')
const Enum = require('../enum/enum')
const EnumItem = require('../enum/enumItem')

describe('class Enum test', () => {

    it('test constructor', () => {
        const App = new Enum({
            name: 'Alipay',
            description: 'alipay description'
        })

        assert.ok(App.Name instanceof EnumItem)
        assert.ok(App.Description instanceof EnumItem)

        assert.equal('Alipay', App.Name.rawValue)
        assert.equal('Alipay', App.Name.$rawValue)
        assert.equal('alipay description', App.Description.rawValue)
        assert.equal('alipay description', App.Description.$rawValue)

        assert.equal('Name', App.Name.$key)
        assert.equal('Description', App.Description.$key)

        assert.equal('Alipay', App.Name.Encode())
        assert.equal('alipay description', App.Description.Encode())
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

        assert.equal('Alipay', App.Alipay.name)
        assert.equal('alipay description', App.Alipay.description)

        assert.notEqual(App.Alipay, App.Alipay.Encode())
        assert.deepEqual(App.Alipay, App.Alipay.Encode())
    })

    it('test append', () => {
        const App = new Enum({
            wechat: {
                name: 'Wechat',
                description: 'wechat description'
            }
        })

        App.append('alipay', {
            name: 'Alipay',
            description: 'alipay description'
        })

        assert.equal('Alipay', App.Alipay.name)
        assert.equal('alipay description', App.Alipay.description)

        assert.notEqual(App.Alipay, App.Alipay.Encode())
        assert.deepEqual(App.Alipay, App.Alipay.Encode())
    })

    it('test extend', () => {
        const App = new Enum({
            baidu: {
                name: 'Baidu',
                description: 'baidu description'
            }
        })

        App.extend({
            alipay: {
                name: 'Alipay',
                description: 'alipay description'
            },

            wechat: {
                name: 'Wechat',
                description: 'wechat description'
            }
        })

        assert.equal('Alipay', App.Alipay.name)
        assert.equal('alipay description', App.Alipay.description)

        assert.notEqual(App.Alipay, App.Alipay.Encode())
        assert.deepEqual(App.Alipay, App.Alipay.Encode())
    })
})
