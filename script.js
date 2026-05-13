let doadores = [];

const form = document.getElementById("formDoacao");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("listaDoadores");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipoSanguineo").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();

     if (!nome || !email || !idade || !peso || !tipo || !telefone || !cidade || !estado) {
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    if (nome.split(" ").length < 2) {
        mensagem.textContent = "Digite nome e sobrenome!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "Email inválido!";
        return;
    }

    if (idade < 18) {
        mensagem.textContent = "Idade mínima é 18 anos!";
        return;
    }

    if (peso < 50) {
        mensagem.textContent = "Peso mínimo é 50kg!";
        return;
    }

    let doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    };

    doadores.push(doador);

    mensagem.textContent = "Cadastro realizado com sucesso!";
    form.reset();

    mostrarDoadores();
    console.log(doadores);
});

function mostrarDoadores() {
    lista.innerHTML = "";

    doadores.forEach(d => {
        lista.innerHTML += `
            <div class="card">
                <p><strong>Nome:</strong> ${d.nome}</p>
                <p><strong>Tipo:</strong> ${d.tipoSanguineo}</p>
                <p><strong>Cidade:</strong> ${d.cidade} - ${d.estado}</p>
            </div>
        `;
    });
}