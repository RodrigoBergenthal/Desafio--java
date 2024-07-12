// Define a baseUrl para o seu backend (ajuste conforme necessário)
const baseUrl = 'http://localhost:8080/api'; // Exemplo: backend rodando localmente na porta 8080

// Event listener para enviar dados do formulário
document.addEventListener('DOMContentLoaded', async function() {
    await carregarCores();
    await fetchCarros();

    const carForm = document.getElementById('carForm');
    carForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const modelo = document.getElementById('modelo').value;
        const marcaId = document.getElementById('marca').value; // Obtém o ID da marca selecionada
        const corId = document.getElementById('cor').value; // Obtém o ID da cor selecionada

        try {
            const response = await fetch(`${baseUrl}/carros`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    modelo: modelo,
                    marca: { id: marcaId }, // Envia o ID da marca
                    cor: { id: corId } // Envia o ID da cor
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao adicionar carro: ' + response.statusText);
            }

            const carro = await response.json();
            console.log('Novo carro adicionado:', carro);
            // Atualizar lista de carros após adicionar
            fetchCarros();
        } catch (error) {
            console.error('Erro:', error.message);
        }
    });
});

async function carregarCores() {
    try {
        const response = await fetch(`${baseUrl}/cores`);
        const cores = await response.json();

        const corSelect = document.getElementById('corSelect');
        cores.forEach(cor => {
            const option = document.createElement('option');
            option.value = cor.id;
            option.textContent = cor.nome;
            corSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar cores:', error.message);
    }
}

async function fetchCarros() {
    try {
        const response = await fetch(`${baseUrl}/carros`);
        const carros = await response.json();

        const carrosList = document.getElementById('carrosList');
        carrosList.innerHTML = '';

        carros.forEach(carro => {
            const carroItem = document.createElement('div');
            carroItem.classList.add('carro-item');
            carroItem.innerHTML = `
                <h3>${carro.nome}</h3>
                <p>Modelo: ${carro.modelo}</p>
                <p>Marca: ${carro.marca.nome}</p>
                <p>Cor: ${carro.cor.nome}</p>
            `;
            carrosList.appendChild(carroItem);
        });
    } catch (error) {
        console.error('Erro ao buscar carros:', error.message);
    }
}

async function filtrarCarros() {
    const corSelect = document.getElementById('corSelect');
    const corId = corSelect.value;

    let url = `${baseUrl}/carros`;
    if (corId) {
        url += `?corId=${corId}`;
    }

    try {
        const response = await fetch(url);
        const carros = await response.json();

        const carrosList = document.getElementById('carrosList');
        carrosList.innerHTML = '';

        carros.forEach(carro => {
            const carroItem = document.createElement('div');
            carroItem.classList.add('carro-item');
            carroItem.innerHTML = `
                <h3>${carro.nome}</h3>
                <p>Modelo: ${carro.modelo}</p>
                <p>Marca: ${carro.marca.nome}</p>
                <p>Cor: ${carro.cor.nome}</p>
            `;
            carrosList.appendChild(carroItem);
        });
    } catch (error) {
        console.error('Erro ao filtrar carros:', error.message);
    }
}
