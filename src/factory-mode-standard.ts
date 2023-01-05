type FnType = () => void

interface IProduct {
    name: string,
    fn1: FnType
    fn2: FnType
}

class Product1 implements IProduct {
    name: string
    constructor(name: string) {
        this.name = name
    }
    fn1() {
        alert('Product1 fn1')
    }
    fn2() {
        alert('Product1 fn2')
    }
}

class Product2 implements IProduct {
    name: string
    constructor(name: string) {
        this.name = name
    }
    fn1() {
        alert('Product2 fn1')
    }
    fn2() {
        alert('Product2 fn2')
    }
}

class Creator {
    // 依赖倒置原则
    create(type: string, name: string): IProduct {
        if (type === 'p1') {
            return new Product1(name)
        }
        if (type === 'p2') {
            return new Product2(name)
        }
        throw new Error('Invalid type')
    }
}

const creator = new Creator()
const p1 = creator.create('p1', 'name1')
const p11 = creator.create('p1', 'name11')
const p2 = creator.create('p2', 'name2')
const p21 = creator.create('p2', 'name21')
