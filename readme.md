Enum type
---
简单的Enum类型

### Install
```sh
npm i @4a/enum
```

### Usage
```js
// ES6
import Enum from '@4a/enum'

// or Nodejs
const Enum = require('@4a/enum')


const DemoEnum = Enum({
    name: "NAME",
    homePage: "HOMEPAGE",
})

DemoEnum.Name.rawValue // "NAME"
DemoEnum.HomePage.rawValue // "HOMEPAGE"

DemoEnum.has(DemoEnum.HomePage)
```

```js
function Message(code, message) {
    return { code, message }
}

const ResultMessage = Enum({
    errorToken: Message(1000, "token error"),
    expiredToken: Message(1001, "token expired"),
})

ResultMessage.ErrorToken // {code: 1000, message: "token error"}
ResultMessage.ExpiredToken // {code: 1001, message: "token expired"}

try {
    throw ResultMessage.ErrorToken.Error()
}
catch(err) {
    if (ResultMessage.has(err)) {
        console.log(err.Encode())
    }
    console.log(err)
}
```
