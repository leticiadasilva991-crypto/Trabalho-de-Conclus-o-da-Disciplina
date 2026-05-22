export default class ServicoDePagamento {

    constructor(){
        this.pagamento = [];
    }

    efetuarPagamentos(codigoDeBarras, de, valor){
        this.pagamento.push({
            codigoBarras: codigoDeBarras,
            empresa: de,
            valorConta: valor
        });
    }
    consultar(){
        return this.pagamento;
    }
}

export function adicionarCategoria(pagamentos) {
    pagamentos.forEach(function (pagamento) {
        if (pagamento.valorConta > 100.00) {
            pagamento.categoria = 'Caro';
        } else {
            pagamento.categoria = 'Padrão';
        }
    });
}