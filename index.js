
const apiFeriados = "https://brasilapi.com.br/api/feriados/v1/2022";

function feriados() {

    fetch(apiFeriados)
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json);
        })
        .catch(error => {
            console.log("Erro aqui:", error);
        });
}

const divContent = document.querySelector('#content');
console.log(divContent);

