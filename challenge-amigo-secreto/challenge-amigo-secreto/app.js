let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    listaAmigos.push(nome.upperCase());
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;
        li.style.opacity = "0"; // Começa invisível
        li.style.transition = "opacity 0.5s ease-in-out";

        // Botão de remover
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.style.marginLeft = "10px";
        btnRemover.style.cursor = "pointer";
        btnRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(btnRemover);
        ul.appendChild(li);

        setTimeout(() => {
            li.style.opacity = "1"; // Aparece suavemente
        }, 100);
    });
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Sorteando...";
    resultado.style.color = "#ff8800";
    resultado.style.fontSize = "20px";
    resultado.style.transition = "all 0.5s ease-in-out";

    setTimeout(() => {
        const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
        const amigoSorteado = listaAmigos[indiceSorteado];
        resultado.innerHTML = `<li style="color: green; font-size: 24px; font-weight: bold;">Esse é o seu amigo secreto: <strong>${amigoSorteado}</strong></li>`;
    }, 1500); // Pequeno atraso para criar suspense
}