const Enum = require('./index')

function Message(code, message) {
    return { code, message }
}

const ResultMessage = Enum({
    errorToken: Message(1000, "token error"),
    expiredToken: Message(1001, "token expired"),
})

ResultMessage.ErrorToken // {code: 1000, message: "token error"}
ResultMessage.ExpiredToken // {code: 1001, message: "token expired"}

// try {
//     throw ResultMessage.ErrorToken.Error("SomeError")
// }
// catch (err) {
//     if (err instanceof Enum.EnumError) {
//         console.log(err.Encode())
//     }
//     console.log(err)
//     console.log(ResultMessage.ErrorToken)
// }
// console.log('================================')

console.log(
    ResultMessage.append('lossParameter', Message(2000, 'loss parameter'))
)

ResultMessage.extend({
    errorParameter: Message(2001, 'error parameter')
})

console.log(ResultMessage)
console.log()
console.log('================================')
console.log()

const assert = require('./assert')

// assert.ok(1 === 2, ResultMessage.ErrorToken.Error())
// assert.fail(1 === 1, ResultMessage.ErrorToken.Error())
// assert.equal(1, 2, ResultMessage.ErrorToken.Error())
// assert.notEqual(1, 1, ResultMessage.ErrorToken.Error())
// assert.deepEqual([1], [2], ResultMessage.ErrorToken.Error())

try {
    assert.notDeepEqual([2], [2], ResultMessage.ErrorToken.Error('custom error message'))
}
catch(err) {
    if (err instanceof Enum.EnumError) {
        console.log(101, err.Encode())
        console.log(101, err.Encode().code)
        console.log(101, err.Encode().message)
        console.log(101, err)
    }
}
