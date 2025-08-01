/* //código original//


    let p = document.querySelector('p')
    let input = document.querySelector('input')

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            search();
        }
    });
    const contacts = [
        { name: 'Rainer', number: '(61) 994253612' },
        { name: 'Raimundo', number: '(61) 994253613' },
        { name: 'Carlos', number: '(61) 994253614' },
        { name: 'Douglas', number: '(61) 994253615' },
        { name: 'Maria', number: '(61) 994253616' },
        { name: 'Marlene', number: '(61) 994253617' },
        { name: 'Rutiely', number: '(61) 994253618' },
        { name: 'Cleide', number: '(61) 994253619' },
    ]
    function search() {
        for (let i = 0; i < contacts.length; i++) {
            if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
                p.innerHTML = `Contato Encontrado Nome:${contacts[i].name} Tel: ${contacts[i].number}`;
                break;
            }
        }
        if (!found) {
            p.innerHTML = "Contato não encontrado, tente novamente";
        }
    }
        */

const contacts = [
    { name: 'Rainer', number: '(61) 994253612' },
    { name: 'Raimundo', number: '(61) 994253613' },
    { name: 'Carlos', number: '(61) 994253614' },
    { name: 'Douglas', number: '(61) 994253615' },
    { name: 'Maria', number: '(61) 994253616' },
    { name: 'Marlene', number: '(61) 994253617' },
    { name: 'Rutiely', number: '(61) 994253618' },
    { name: 'Cleide', number: '(61) 994253619' },
];

const buscarInput = document.getElementById('buscarInput');
const resultado = document.getElementById('resultado');
const novoNome = document.getElementById('novoNome');
const novoNumero = document.getElementById('novoNumero');

document.getElementById('buscarBtn').addEventListener('click', search);
document.getElementById('adicionarBtn').addEventListener('click', addContact);

function search() {
    const nome = buscarInput.value.trim().toLowerCase();
    const contato = contacts.find(c => c.name.toLowerCase() === nome);

    if (contato) {
        resultado.textContent = `Contato encontrado: ${contato.name} - ${contato.number}`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Contato não encontrado.';
        resultado.style.color = 'yellow';
    }
}

function addContact() {
    const name = novoNome.value.trim();
    const number = novoNumero.value.trim();

    if (name && number) {
        contacts.push({ name, number });
        resultado.textContent = `Contato ${name} adicionado com sucesso!`;
        resultado.style.color = 'black';

        // Limpa os campos
        novoNome.value = '';
        novoNumero.value = '';
    } else {
        resultado.textContent = 'Preencha ambos os campos para adicionar.';
        resultado.style.color = 'orange';
    }
}
