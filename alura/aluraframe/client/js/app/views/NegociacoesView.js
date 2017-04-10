class NegociacoesView extends View {
    constructor(element) {
        super(element)
    }
    
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.map(n => `
                        <tr>
                            <td>${DateHelper.dateToString(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>
                
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${model.reduce((prev, cur) => prev + cur.volume, 0.0)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        `
    }
}