document.addEventListener('DOMContentLoaded', function () {
    // Validação do formulário de cadastro
    const form = document.getElementById('formCadastro');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (form.checkValidity()) {
                document.getElementById('mensagem').innerHTML =
                    '<div class="alert alert-success" role="alert">Cadastro realizado com sucesso!</div>';
                form.reset();
            } else {
                form.classList.add('was-validated');
            }
        });
    }

    // Carrossel contínuo de produtos - TODOS OS ITENS DO ESTOQUE
    const produtos = [
        // Hortifruti
        {
            nome: "Banana Prata",
            imagem: "assets/banana.png",
            alt: "Banana Prata: fruta fresca, rica em potássio",
            descricao: "Fruta fresca, rica em potássio."
        },
        {
            nome: "Alface Crespa",
            imagem: "assets/alface.png",
            alt: "Alface Crespa: folhas crocantes e saborosas",
            descricao: "Folhas crocantes e saborosas."
        },
        {
            nome: "Tomate Italiano",
            imagem: "assets/tomate.png",
            alt: "Tomate Italiano: perfeito para saladas e molhos",
            descricao: "Perfeito para saladas e molhos."
        },
        {
            nome: "Cenoura",
            imagem: "assets/cenoura.png",
            alt: "Cenoura: rica em vitamina A",
            descricao: "Rica em vitamina A."
        },

        // Alimentos
        {
            nome: "Arroz Tio João",
            imagem: "assets/arroz.png",
            alt: "Arroz Tio João 5kg: grãos selecionados",
            descricao: "Arroz branco tipo 1, pacote de 5kg."
        },
        {
            nome: "Feijão Carioca Camil",
            imagem: "assets/feijao.png",
            alt: "Feijão Carioca Camil 1kg: grãos limpos e selecionados",
            descricao: "Feijão carioca tipo 1, pacote de 1kg."
        },
        {
            nome: "Macarrão Barilla Espaguete",
            imagem: "assets/macarrao.png",
            alt: "Macarrão Barilla Espaguete 500g: massa italiana",
            descricao: "Massa italiana de alta qualidade."
        },
        {
            nome: "Óleo de Soja Liza",
            imagem: "assets/oleo.png",
            alt: "Óleo de Soja Liza 900ml: ideal para cozinhar e fritar",
            descricao: "Óleo de soja refinado, garrafa de 900ml."
        },

        // Higiene
        {
            nome: "Sabonete Dove",
            imagem: "assets/sabonete.png",
            alt: "Sabonete Dove 90g: hidratante com 1/4 de creme",
            descricao: "Sabonete em barra Dove original, 90g."
        },
        {
            nome: "Shampoo Seda",
            imagem: "assets/shampoo.png",
            alt: "Shampoo Seda 325ml: para cabelos danificados",
            descricao: "Shampoo Seda Reconstrução, 325ml."
        },
        {
            nome: "Pasta de Dente Colgate",
            imagem: "assets/pasta.png",
            alt: "Pasta de Dente Colgate 90g: proteção completa",
            descricao: "Creme dental Colgate Total 12, 90g."
        },
        {
            nome: "Desodorante Rexona",
            imagem: "assets/desodorante.png",
            alt: "Desodorante Rexona 150ml: proteção 48h",
            descricao: "Desodorante aerosol Rexona Men, 150ml."
        }
    ];

    // Carrossel contínuo
    const carouselContinuo = document.getElementById('carousel-continuo-produtos');
    if (carouselContinuo) {
        const allProdutos = [...produtos, ...produtos];
        allProdutos.forEach(produto => {
            const div = document.createElement('div');
            div.className = 'item-produto';
            div.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.alt}">
                <h6>${produto.nome}</h6>
                <p>${produto.descricao}</p>
            `;
            carouselContinuo.appendChild(div);
        });
    }

    // --------- FUNCIONALIDADE DE CARRINHO ---------
    // Adiciona ao carrinho e salva no localStorage
    function getCarrinho() {
        return JSON.parse(localStorage.getItem('carrinho')) || [];
    }

    function calcularTotalCarrinho() {
        const carrinho = getCarrinho();
        return carrinho.reduce((total, item) => total + item.preco * item.qtd, 0);
    }

    function setCarrinho(carrinho) {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
    function atualizarCarrinhoExibicao() {
        const lista = document.getElementById('lista-carrinho');
        const totalDiv = document.getElementById('total-carrinho');
        if (!lista || !totalDiv) return;
        const carrinho = getCarrinho();
        lista.innerHTML = '';
        let total = 0;
        carrinho.forEach((item, idx) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.nome} x${item.qtd} - R$ ${(item.preco * item.qtd).toFixed(2)}
                <button class="btn btn-sm btn-danger ms-2 btn-remover-carrinho" data-idx="${idx}" title="Remover item">Remover</button>
            `;
            lista.appendChild(li);
            total += item.preco * item.qtd;
        });
        totalDiv.textContent = 'Total: R$ ' + total.toFixed(2);

        // Remover item do carrinho
        document.querySelectorAll('.btn-remover-carrinho').forEach(btn => {
            btn.onclick = function () {
                const idx = parseInt(this.getAttribute('data-idx'));
                const carrinho = getCarrinho();
                carrinho.splice(idx, 1);
                setCarrinho(carrinho);
                atualizarCarrinhoExibicao();
            };
        });
    }

    // Exibe o carrinho na tabela do carrinho.html
    function atualizarCarrinhoTabela() {
        const tbody = document.getElementById('tbody-carrinho');
        const totalDiv = document.getElementById('total-carrinho');
        if (!tbody || !totalDiv) return;
        const carrinho = getCarrinho();
        tbody.innerHTML = '';
        let total = 0;
        carrinho.forEach((item, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.nome}</td>
                <td>${item.qtd}</td>
                <td class="valor">R$ ${(item.preco * item.qtd).toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-danger btn-remover-carrinho" data-idx="${idx}" title="Remover item">Remover</button>
                </td>
            `;
            tbody.appendChild(tr);
            total += item.preco * item.qtd;
        });
        totalDiv.textContent = 'Total: R$ ' + total.toFixed(2);

        // Remover item do carrinho
        document.querySelectorAll('.btn-remover-carrinho').forEach(btn => {
            btn.onclick = function () {
                const idx = parseInt(this.getAttribute('data-idx'));
                const carrinho = getCarrinho();
                carrinho.splice(idx, 1);
                setCarrinho(carrinho);
                atualizarCarrinhoTabela();
            };
        });
    }

    // Botão adicionar ao carrinho
    document.querySelectorAll('.btn-carrinho').forEach(btn => {
        btn.addEventListener('click', function () {
            const nome = this.getAttribute('data-produto') || this.parentElement.querySelector('h3')?.textContent;
            const preco = parseFloat(this.getAttribute('data-preco')) || parseFloat(this.parentElement.querySelector('.valor')?.textContent.replace(/[^\d,.-]/g, '').replace(',', '.'));
            const input = this.parentElement.querySelector('input[type="number"]');
            const qtd = input ? parseInt(input.value) : 1;
            if (!nome || isNaN(preco) || isNaN(qtd)) return;
            let carrinho = getCarrinho();
            const existente = carrinho.find(p => p.nome === nome && p.preco === preco);
            if (existente) {
                existente.qtd += qtd;
            } else {
                carrinho.push({ nome, preco, qtd });
            }
            setCarrinho(carrinho);
            atualizarCarrinhoExibicao();
            // Feedback visual simples
            this.textContent = "Adicionado!";
            setTimeout(() => { this.textContent = "Adicionar ao carrinho"; }, 1000);
        });
    });

    // Atualiza carrinho ao carregar a página
    atualizarCarrinhoExibicao();
    atualizarCarrinhoTabela();

    // Troca de tipo de entrega (opcional: salvar no localStorage)
    document.querySelectorAll('input[name="tipo-entrega"]').forEach(radio => {
        radio.addEventListener('change', function () {
            localStorage.setItem('tipoEntrega', this.value);
        });
    });

    // Ao carregar página do carrinho, marcar opção salva
    const tipoEntregaSalvo = localStorage.getItem('tipoEntrega');
    if (tipoEntregaSalvo) {
        const radio = document.querySelector(`input[name="tipo-entrega"][value="${tipoEntregaSalvo}"]`);
        if (radio) radio.checked = true;
    }

    // Mensagem de sucesso ao finalizar pedido
    const btnFinalizar = document.querySelector('.btn-finalizar-pedido');
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Pedido realizado com sucesso!');
        });
    }

    // Mostrar/esconder calendário conforme opção de entrega
    const radiosEntrega = document.querySelectorAll('input[name="tipo-entrega"]');
    const dataEntregaContainer = document.getElementById('data-entrega-container');
    if (radiosEntrega && dataEntregaContainer) {
        radiosEntrega.forEach(radio => {
            radio.addEventListener('change', function () {
                if (this.value === 'entrega') {
                    dataEntregaContainer.style.display = 'block';
                } else {
                    dataEntregaContainer.style.display = 'none';
                }
            });
            // Exibe o calendário se já estiver selecionado ao carregar a página
            if (radio.checked && radio.value === 'entrega') {
                dataEntregaContainer.style.display = 'block';
            }
        });
    }

    // Controle de entrega mínima e data
    const radioEntrega = document.getElementById('radio-entrega');
    const avisoEntrega = document.getElementById('aviso-entrega');

    function atualizarEntregaDisponivel() {
        const total = calcularTotalCarrinho();
        if (radioEntrega) {
            if (total < 30) {
                radioEntrega.checked = false;
                radioEntrega.disabled = true;
                if (avisoEntrega) avisoEntrega.style.display = 'inline';
                // Seleciona retirada se entrega não for possível
                const radioRetirada = document.querySelector('input[name="tipo-entrega"][value="retirada"]');
                if (radioRetirada) radioRetirada.checked = true;
            } else {
                radioEntrega.disabled = false;
                if (avisoEntrega) avisoEntrega.style.display = 'none';
            }
        }
    }

    // Atualiza ao carregar e sempre que o carrinho mudar
    atualizarEntregaDisponivel();
});