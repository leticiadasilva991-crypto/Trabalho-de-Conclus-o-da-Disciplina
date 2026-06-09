export default class ServicoDePagamento {

    constructor(){
        this.pagamento = [];
    }

    efetuarPagamentos(codigoDeBarras, de, valor, categoria){
        this.pagamento.push({
            codigoBarras: codigoDeBarras,
            empresa: de,
            valor: valor,
            categoria: categoria
        });
    }

    consultar(){
        return this.pagamento;
    }

    ultimoPagamento(){
        return this.pagamento.at(-1);
    }
}

export function adicionarCategoria(pagamentos) {
    pagamentos.forEach(function (pagamento) {
        if (pagamento.valor > 100.00) {
            pagamento.categoria = 'cara';
        } else {
            pagamento.categoria = 'padrão';
        }
    });
}