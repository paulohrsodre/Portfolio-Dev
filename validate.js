const formulario = document.querySelector(".formcontato__form");
const campos     = document.querySelectorAll(".required");
const spans      = document.querySelectorAll(".span-required");
const nome       = document.querySelector("#nome");
const email      = document.querySelector("#email");
const assunto    = document.querySelector("#assunto");
const mensagem   = document.querySelector("#mensagem");
const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

//Evento que valida campos preenchidos e seu formato ao apertar o botão de submissão
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nome.value === "") {
        alert("Pro favor, digite o seu nome");
        return;
    }
    
    if(email.value === "" || !validaEmail(email.value)) {
        alert("Por favor digite um email válido");
        return;
    }

    if(assunto.value === "") {
        alert("Pro favor, informe o assunto");
        return;
    }

    if(mensagem.value === "") {
        alert("Pro favor, fale sobre o que precisa");
        return;
    }
    
    formulario.submit();
});

//Evento que valida cada informação inserida e seu formato no campo em tempo real
campos.forEach((campo, index) => {
    campo.addEventListener("input", (event) => {
        event.preventDefault();

        switch(index) {
            case 0:
                if(campo.value.length < 3) {
                    setError(index);
                } else {
                    removeError(index);
                }
                break;
            case 1:
                if(!validaEmail()) {
                    console.log("validando email")
                    setError(index);
                } else {
                    console.log("validado")
                    removeError(index);
                }
                break;
            case 2:
                if(campo.value.length < 5) {
                    setError(index);
                } else {
                    removeError(index);
                }
                break;
            case 3:
                if(campo.value.length < 10) {
                    setError(index);
                } else {
                    removeError(index);
                }
                break;
        }
    });
});

//Função para validar o formato de email
function validaEmail() {
    if(emailRegex.test(email.value)) {
        return true;
    };
    return false;
}

//Funções de alerta de erro do input em tempo real
function setError(index) {
    campos[index].style.border = '2px solid #DC2626';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}
