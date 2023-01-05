class SingleTon {

    // private 无法在外面实例化
    private constructor() {}

    // 单例的对象
    private static instance: SingleTon | null

    // 获取单例
    static getInstance(): SingleTon {
        if (SingleTon.instance === null) {
            SingleTon.instance = new SingleTon()
        }
        return SingleTon.instance
    }
}

const s1 = SingleTon.getInstance() // 正确获取单例对象的方式
// SingleTon.instance // 报错
// const p1 = new SingleTon() // 报错

export {}