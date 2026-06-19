# Trabalho Final – Pipeline CI/CD com GitHub Actions

## Objetivo

Este projeto tem como objetivo demonstrar a implementação de uma pipeline de Integração Contínua (CI) utilizando o GitHub Actions em um projeto com testes unitários.

A solução contempla:

* Execução automática da pipeline a cada push na branch principal.
* Execução manual da pipeline por meio da interface do GitHub Actions.
* Execução agendada utilizando expressões Cron.
* Execução unitária dos testes.
* Geração de relatórios de execução dos testes.
* Armazenamento e publicação dos relatórios gerados como artefatos da pipeline.
* Documentação da solução e dos conceitos aplicados.

---

# Tecnologias Utilizadas

* GitHub Actions
* Node.js
* Mocha
* YAML
* Git e GitHub

---

# Estrutura da Pipeline

## Gatilhos (on)
A pipeline é acionada de três formas:

push – a cada push no repositório
workflow_dispatch – execução manual pela interface do GitHub
schedule – automaticamente toda sexta-feira às 16h e 21h (UTC), via expressão cron 0 16,21 * * 5

## 1. Execução por Push

A pipeline é executada automaticamente sempre que um push é realizado na branch `main`.

### Evento de disparo

```yaml
on:
  push:
```

### Fluxo executado

1. Checkout do código-fonte.
2. Configuração do ambiente Node.js.
3. Instalação das dependências do projeto.
4. Execução dos testes unitários.
5. Geração do relatório de execução.
6. Publicação dos resultados na pipeline.

---

## 2. Execução Manual

Esta pipeline pode ser executada manualmente por qualquer usuário com acesso ao repositório.

### Evento de disparo

```yaml
on:
  workflow_dispatch:
```

### Como executar

1. Acesse a aba **Actions** do repositório.
2. Selecione o workflow desejado.
3. Clique em **Run workflow**.
4. Escolha a branch de execução.
5. Clique novamente em **Run workflow** para iniciar o processo.

---

## 3. Execução Agendada

Esta pipeline é executada automaticamente de acordo com um agendamento definido por uma expressão Cron.

### Evento de disparo

```yaml
on:
  schedule:
    - cron: '0 16,21 * * 5'
```

### Agendamento configurado

A execução ocorre automaticamente:

* Às 16:00
* Às 21:00

Toda sexta-feira.

---

# Estratégia de Testes

Para validação do funcionamento da pipeline foram criados três cenários de teste:

* Dois testes com resultado esperado de sucesso.
* Um teste propositalmente configurado para falhar.

Essa abordagem permite avaliar o comportamento da pipeline tanto em cenários de aprovação quanto em cenários de falha, verificando a geração correta dos relatórios e a continuidade da execução.

---

# Geração e Publicação de Relatórios

As pipelines executam os testes utilizando o framework Mocha e geram relatórios contendo os resultados da execução.

Após a geração, os relatórios são armazenados como artefatos do GitHub Actions, possibilitando:

* Download dos arquivos gerados.
* Consulta posterior dos resultados.
* Rastreabilidade das execuções realizadas.

---

# Tratamento de Falhas

Foi utilizada a propriedade:

```yaml
continue-on-error: true
```

nas etapas relacionadas à execução dos testes e publicação dos resultados.

Essa configuração permite que a pipeline continue sua execução mesmo quando um ou mais testes falham, garantindo a geração dos relatórios e facilitando a análise dos problemas encontrados.

---

# Resultado Esperado

Ao final da execução de qualquer workflow, a pipeline deverá:

* Executar os testes unitários.
* Gerar o relatório de execução.
* Publicar os resultados dos testes.
* Armazenar os artefatos gerados.
* Finalizar a execução com todas as evidências necessárias para análise dos resultados.

---

# Evidências

As evidências de execução podem ser consultadas diretamente na aba **Actions** do GitHub, onde é possível visualizar:

* Histórico das execuções.
* Logs detalhados.
* Resultados dos testes.
* Artefatos publicados pela pipeline.
