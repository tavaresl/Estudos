class NegociacoesLista {
    constructor(lista = []) {
        this._lista = lista
    }

    adiciona(item) {
        this._lista.push(item)
    }

    get lista() {
        return [].concat(this._lista)
    }
}