# Refund Template

Projeto de estudo desenvolvido com HTML, CSS e JavaScript puro para simular uma tela de solicitação de reembolso. A aplicação permite cadastrar despesas, exibir os itens em uma lista, calcular o total automaticamente e remover registros da interface.

## Visão geral

Este projeto foi pensado para praticar conceitos fundamentais de front-end, como:

- estruturação de páginas com HTML semântico;
- estilização responsiva com CSS;
- manipulação do DOM com JavaScript;
- eventos de formulário;
- formatação de valores em moeda brasileira;
- atualização dinâmica de contadores e totais.

A interface é dividida em duas áreas principais:

- um formulário para cadastrar novas despesas;
- um painel lateral com a lista de solicitações adicionadas e o total acumulado.

## Funcionalidades

- Cadastro de despesas com nome, categoria e valor.
- Máscara automática para o campo de valor em reais.
- Renderização dinâmica de cada despesa na lista.
- Exibição do número total de despesas cadastradas.
- Cálculo automático do valor total das despesas.
- Remoção de itens da lista com atualização dos totais.
- Layout responsivo para telas menores.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Google Fonts

## Como o projeto funciona

### Formulário

O usuário informa:

- o nome da despesa;
- a categoria;
- o valor da despesa.

Ao enviar o formulário, o JavaScript intercepta o envio padrão, cria um objeto com os dados digitados e adiciona esse item na lista lateral.

### Formatação de moeda

Enquanto o usuário digita no campo de valor, o texto é convertido para o formato monetário brasileiro, exibindo valores no padrão `R$ 0,00`.

### Lista de despesas

Cada despesa cadastrada é exibida com:

- ícone da categoria;
- nome da despesa;
- nome da categoria;
- valor formatado;
- ícone para remoção.

### Cálculo de total

A cada novo cadastro ou remoção, a aplicação percorre os itens da lista e recalcula:

- a quantidade de despesas;
- o total acumulado em reais.

## Estrutura do projeto

```text
refund-template/
├── index.html
├── styles.css
├── script.js
└── img/
    ├── accommodation.svg
    ├── chevron-down.svg
    ├── food.svg
    ├── logo.svg
    ├── others.svg
    ├── remove.svg
    ├── services.svg
    └── transport.svg
```

## Principais arquivos

### `index.html`

Contém a estrutura da página, o formulário de cadastro e a área lateral com o resumo das despesas.

### `styles.css`

Responsável por toda a apresentação visual, incluindo organização em layout flexível, estados de foco, responsividade e aparência geral da interface.

### `script.js`

Contém a lógica da aplicação:

- captura dos elementos do DOM;
- formatação do campo de valor;
- criação dinâmica dos itens da lista;
- cálculo do total;
- remoção de despesas;
- limpeza do formulário após o envio.

## Como executar

Por ser um projeto estático, não há necessidade de instalar dependências.

1. Abra a pasta do projeto no VS Code ou em outro editor.
2. Abra o arquivo `index.html` no navegador.
3. Preencha o formulário e adicione despesas para testar a aplicação.

Se preferir, você também pode usar a extensão Live Server no VS Code para visualizar o projeto durante o desenvolvimento.

## O que foi praticado neste estudo

Este projeto ajuda a consolidar tópicos importantes do front-end, como:

- criação de componentes visuais com HTML e CSS;
- uso de `querySelector`, `getElementById` e eventos;
- manipulação dinâmica de elementos com `createElement` e `append`;
- tratamento de valores numéricos e conversão para moeda;
- atualização de interface sem recarregar a página.

## Licença

Projeto de estudo sem licença definida.
