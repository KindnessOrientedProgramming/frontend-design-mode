// 扩展 window 的属性
declare interface Window {
    $: (selector: string) => JQuery
}

class JQuery {
    selector: string
    length: number
    constructor(selector: string) {
        const nodeList = Array.prototype.slice.call(document.querySelectorAll(selector))
        const length = nodeList.length
        for (let i = 0; i < length; i++) {
            // @ts-ignore
            this[i] = nodeList[i]
        }

        this.selector = selector
        this.length = length
    }
    append(elem: HTMLElement): JQuery {
        // append 的操作
        return this
    }
    addClass(key: string, value: string): JQuery {
        // addClass 的操作
        return this
    }
    html(htmlStr: string): JQuery | string {
        if (htmlStr) {
            // set html
            return this
        } else {
            // get html
            const html = 'xxx'
            return html
        }
    }
}

// 非工厂模式
// const $div = new JQuery('div')
// const $p = new JQuery('p')

// 工厂模式
function $(selector: string) {
    // 逻辑封装
    return new JQuery(selector)
}
const $div = $('div')
const $p = $('p')
window.$ = $

console.log($('p'));

