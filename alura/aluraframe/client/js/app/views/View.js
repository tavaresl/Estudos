class View {
    constructor(element) {
        this._element = element
    }

    render(model) {
        this._element.innerHTML = this.template(model)
    }

    template(model) {
        throw new Error('This method should be reimplemented by children classes')
    }
}