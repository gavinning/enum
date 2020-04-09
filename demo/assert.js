const Enum = require('../index')
const assert = require('../assert')

function Message(code, message) {
    return { code, message }
}

const ResultMessage = Enum({
    errorToken: Message(1000, "token error"),
    expiredToken: Message(1001, "token expired"),
})


assert.ok(1 === 0, ResultMessage.ErrorToken)
