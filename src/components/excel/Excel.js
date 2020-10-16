export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }
    render() {
        // this.$el.insertAdjacentHTML('afterbegin', `<h2>Test</h2>`)
        const node = document.createElement('h1')
        node.textContent = 'TEST'
        this.$el.append(node)
    }
}
