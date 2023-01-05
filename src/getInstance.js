// ES6 module 模块化
let instance

class SingleTon {}

export default () => {
    if (instance == null) {
        instance = new SingleTon
    }
    return instance
}