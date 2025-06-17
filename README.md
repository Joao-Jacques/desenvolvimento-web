# Minimercado PUCRS

Projeto simples de um site responsivo para um minimercado fictício, desenvolvido como parte de um projeto acadêmico da PUCRS.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Como Executar](#como-executar)
- [Detalhes das Páginas](#detalhes-das-páginas)
- [Personalização e Expansão](#personalização-e-expansão)
- [Colaborando](#colaborando)
- [Autor](#autor)

---

## Sobre o Projeto

O Minimercado PUCRS é um site estático que simula a experiência de um pequeno mercado de bairro, permitindo ao usuário navegar por categorias de produtos, adicionar itens ao carrinho, simular um pedido e realizar um cadastro simples. O projeto foi desenvolvido com foco em boas práticas de HTML, CSS e JavaScript, além de responsividade e usabilidade.

---

## Funcionalidades

- **Navegação entre páginas** por categorias (Hortifruti, Alimentos, Higiene, Serviços, Contato, Carrinho).
- **Listagem de produtos** com imagens, descrições, preços e seleção de quantidade.
- **Carrinho de compras** com armazenamento local (localStorage), exibição de itens, remoção e cálculo automático do total.
- **Simulação de pedido**: escolha de tipo de entrega (retirada ou entrega em casa), seleção de data e método de pagamento.
- **Validação de valor mínimo** para entrega em domicílio.
- **Formulário de cadastro** de cliente com validação de campos.
- **Carrossel animado** de produtos na página inicial.
- **Design responsivo** para uso em dispositivos móveis e desktop.
- **Estilização customizada** com CSS moderno e integração com Bootstrap.

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilização customizada ([assets/style.css](assets/style.css)), incluindo responsividade.
- **Bootstrap 5**: Componentes e grid responsivo.
- **JavaScript (ES6)**: Funcionalidades dinâmicas ([assets/script.js](assets/script.js)), manipulação do DOM e localStorage.
- **Imagens**: PNGs dos produtos e serviços.

---

## Estrutura de Pastas

```
desenvolvimento-web/
│
├── alimentos.html
├── cadastro.html
├── carrinho.html
├── contato.html
├── higiene.html
├── hortifruti.html
├── index.html
├── servicos.html
├── README.md
└── assets/
    ├── alface.png
    ├── arroz.png
    ├── banana.png
    ├── cartao.png
    ├── cenoura.png
    ├── desodorante.png
    ├── encomenda.png
    ├── entrega.png
    ├── feijao.png
    ├── macarrao.png
    ├── oleo.png
    ├── pasta.png
    ├── sabonete.png
    ├── shampoo.png
    ├── tomate.png
    ├── script.js
    └── style.css
```

---

## Como Executar

1. **Clone ou baixe este repositório** em sua máquina.
2. **Abra o arquivo [`index.html`](index.html)** em seu navegador preferido.
3. Navegue pelas páginas utilizando o menu superior.

> **Observação:** Não é necessário servidor web ou backend para testar as funcionalidades. O carrinho utiliza o `localStorage` do navegador para persistência temporária dos itens.

---

## Detalhes das Páginas

- **[`index.html`](index.html)**: Página inicial com carrossel de produtos, destaques de categorias e serviços.
- **[`alimentos.html`](alimentos.html)**: Lista de alimentos básicos (arroz, feijão, macarrão, óleo).
- **[`hortifruti.html`](hortifruti.html)**: Frutas, verduras e legumes.
- **[`higiene.html`](higiene.html)**: Produtos de higiene pessoal.
- **[`servicos.html`](servicos.html)**: Serviços oferecidos (entrega, encomendas, cartão fidelidade).
- **[`contato.html`](contato.html)**: Informações de contato, endereço, horários e redes sociais.
- **[`cadastro.html`](cadastro.html)**: Formulário de cadastro de cliente com validação.
- **[`carrinho.html`](carrinho.html)**: Visualização e gerenciamento do carrinho, escolha de entrega e pagamento.

---

## Personalização e Expansão

- Para adicionar novos produtos, edite os arquivos HTML das categorias e, se desejar, atualize o carrossel em [`assets/script.js`](assets/script.js).
- Para alterar estilos, modifique [`assets/style.css`](assets/style.css).
- Para adicionar novas funcionalidades em JavaScript, utilize [`assets/script.js`](assets/script.js).
- As imagens dos produtos e serviços devem ser adicionadas na pasta [`assets`](assets/).
---

## Autor

João Jacques Amann da Rosa  
Projeto acadêmico PUCRS
