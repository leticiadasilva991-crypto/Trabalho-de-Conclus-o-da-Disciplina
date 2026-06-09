import ServicoDePagamento from '../src/servicospagamento.js';
import { adicionarCategoria } from '../src/servicospagamento.js';
import assert from 'node:assert'

describe('Classe de Serviços de Pagamentos', () => {

    it('Validar que o pagamento é efetuado e a categoria está sinalizada como "Cara"', () => {
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();

        //Act
        servicoDePagamento.efetuarPagamentos('0987-7656-3475', 'Grupo Poney', 150.00);
        const pagamentos = servicoDePagamento.consultar();
        adicionarCategoria(pagamentos);

        //Assert
        assert.equal(pagamentos[0].codigoBarras, '0987-7656-3475');
        assert.equal(pagamentos[0].empresa, 'Grupo Poney');
        assert.equal(pagamentos[0].valor, 150.00);
        assert.equal(pagamentos[0].categoria, 'cara');
    });

    it('Validar que o pagamento é efetuado e a categoria está sinalizada como "padrão"', () => {
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();

        //Act
        servicoDePagamento.efetuarPagamentos('0110-9918-6666', 'VHomologs Consultoria', 99.99);
        const pagamentos = servicoDePagamento.consultar();
        adicionarCategoria(pagamentos);

        //Assert
        assert.equal(pagamentos[0].codigoBarras, '0110-9918-6666');
        assert.equal(pagamentos[0].empresa, 'VHomologs Consultoria');
        assert.equal(pagamentos[0].valor, 99.99);
        assert.equal(pagamentos[0].categoria, 'padrão');

    });

    it('Validar que a última transferencia é retornada com sucesso', () =>{
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();
        servicoDePagamento.efetuarPagamentos('1111-2222-3333', 'Empresa X', 150);
        servicoDePagamento.efetuarPagamentos('4444-5555-6666', 'Empresa Y', 200);

        //Act
       const pagamentos = servicoDePagamento.consultar();

        //Assert
       assert.equal(ultimoPagamento.codigoBarras, '4444-5555-6666');
       assert.equal(ultimoPagamento.empresa, 'Empresa Y');
       assert.equal(ultimoPagamento.valor, 200);
       assert.equal(ultimoPagamento.categoria, 'cara');
    });

});