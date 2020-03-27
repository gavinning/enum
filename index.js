const Enum = require('./enum/enum')

module.exports = (plainObject) => new Enum(plainObject)



const ResultMessage = module.exports({
    errorToken: { code: 1000, message: "error token" },
    expiredToken: { code: 1001, message: "expired token" },
    errorParameter: { code: 2000, message: "error parameter" },
    lossParameter: { code: 2001, message: "loss parameter" },
})

try {
    throw ResultMessage.ErrorToken.Error()
}
catch(err) {
    if (ResultMessage.has(err)) {
        console.log(err.Encode())
    }
    console.log(err)
}

