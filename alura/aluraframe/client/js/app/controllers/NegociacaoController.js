class NegociacaoController {
    constructor() {
        this._data         = $("#data")
        this._quantidade   = $("#quantidade")
        this._valor        = $("#valor")
        this._lista        = new NegociacoesLista()
        this._view         = new NegociacoesView($("#negociacoesView"))
        this._mensagem     = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'))

        this._view.render(this._lista.lista)
        this._mensagemView.render(this._mensagem)
    }

    adiciona(evt) {
        evt.preventDefault()
        const date  = DateHelper.stringToDate(this._data.value)
        const trade = new Negociacao(date, this._quantidade.value, this._valor.value)

        this._lista.adiciona(trade)
        this._limpaCampos()
        
        this._mensagem.texto = 'Negociação adicionada com sucesso'
        this._view.render(this._lista.lista)
        this._mensagemView.render(this._mensagem)
    }

    _limpaCampos() {
        this._data.value       = ''
        this._quantidade.value = 1
        this._valor.value      = 0.

        this._data.focus()
    }
}