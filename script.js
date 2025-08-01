

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
buscarInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    search();
  }
});

document.getElementById('adicionarBtn').addEventListener('click', addContact);

function search() {
  const nome = buscarInput.value.trim().toLowerCase();
  let contatoEncontrado = null;

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name.toLowerCase() === nome) {
      contatoEncontrado = contacts[i];
      break;
    }
  }

  if (contatoEncontrado) {
    resultado.textContent = `Contato encontrado: ${contatoEncontrado.name} - ${contatoEncontrado.number}`;
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

    novoNome.value = '';
    novoNumero.value = '';
  } else {
    resultado.textContent = 'Preencha ambos os campos para adicionar.';
    resultado.style.color = 'orange';
  }
}