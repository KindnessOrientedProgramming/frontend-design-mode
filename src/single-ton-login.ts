class LoginForm {

    // hide / show
    private state: string = 'hide'

    private static instance: LoginForm | null = null

    private constructor() {}

    show() {
        if (this.state === 'show') {
            console.log('已经显示了')
            return
        }
        console.log('显示 LoginForm')
        // ...
        this.state = 'show'
    }

    hide() {
        if (this.state === 'hide') {
            console.log('已经隐藏了')
            return
        }
        console.log('隐藏 LoginForm')
        // ...
        this.state = 'hide'
    }

    static getInstance(): LoginForm {
        if (this.instance == null) {
            this.instance = new LoginForm()
        }
        return this.instance
    }

}

const loginForm1 = LoginForm.getInstance()
const loginForm2 = LoginForm.getInstance()

// true
console.log(loginForm1 === loginForm2)
