Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade 'categoria' preenchida pela função como 'cara', caso contrário, a propriedade 'categoria' será preenchida pela função como 'padrão'. O método de consultar trará apenas o último pagamento.
  
  ex. 
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
  
  A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.

**Trabalho Final – Pipeline CI/CD com GitHub Actions**

**Objetivo**

Desenvolver uma pipeline de integração contínua utilizando GitHub Actions para um projeto com testes automatizados, contemplando:

> Execução por push.
> Execução manual.
> Execução agendada (schedule).
> Geração de relatório de testes.
> Armazenamento/publicação do relatório na pipeline.
> Criação de um README explicando a solução e os conceitos utilizados.`

*Preferencialmente utilizar um projeto desenvolvido em outra disciplina da pós-graduação.*

**Requisitos**
> Trabalho individual.
> Utilizar GitHub Actions.
> Pipeline executando com sucesso.
> Testes automatizados executando com sucesso.
> Relatório de execução armazenado na pipeline.
> Aplicação correta dos conceitos estudados.
> Uso adequado das ferramentas escolhidas.
> Documentação completa no README.

**Entrega**

Enviar:
> URL do repositório GitHub contendo a solução.
> Evidência de pelo menos uma execução bem-sucedida da pipeline.

**Prazo: 21/06 às 23h59**
*Forma de entrega:* **Plataforma da disciplina. Aula 6**