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

DemoEnum.append('OK', 'OK')
DemoEnum.extend({
    fail: 'FAIL'
})
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
    if (err instanceof Enum.EnumError) {
        console.log(err.Encode())
    }
    console.log(err)
}
```

### Assert
```js
const assert = require('@4a/enum/assert')

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
```

### Notes
```js
const Enum = require('@4a/enum')

Enum // 创建的类型是静态类型，默认不可修改
Enum.Enum // Enum原始类
Enum.EnumItem // Enum子项的父类
Enum.EnumError // Enum的错误类型父类


// 创建一个Enum类型
// Enum根据obj参数来创建Enum类型
// obj子项的值如果是js原始对象，EnumItem实例的值就是obj对应子项的值
// obj子项的值如果不是原始对象，enumItem.rawValue属性就是obj对应子项的值
const obj = {a: 1, b: 2, app: 3}
const Message = Enum(obj)


// Enum类型enumItem首字母强制大写
Message.App


// EnumError
// EnumItem实例可以直接调用Error方法创建EnumError实例，message参数可选
// 如果EnumItem没有message属性，则必须传递message参数
throw Message.App.Error(message)

// EnumError实例可以调用Encode方法来进行重新编码
Message.App.Error(message).Encode()
```

### Example
> npm test
