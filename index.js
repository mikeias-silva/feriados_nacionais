
const apiFeriados = "https://brasilapi.com.br/api/feriados/v1/2023";

function feriados() {

    fetch(apiFeriados)
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json);
            loadPage(json);
        })
        .catch(error => {
            console.log("Erro aqui:", error);
        });
}

function loadPage(json) {

    const divContent = document.querySelector('#content');
    // const novoElemento = json.map(element => {
    //     let elemento = '';
    //     // console.log(element.name);
    //     return element.name;
    // })
    // console.log(novoElemento);

    json.forEach(element => {
        let date = element.date;
        let testeDate = date.split('-');
        console.log("testedate", testeDate[2]);
        let newDate = new Date(testeDate[0], testeDate[1], testeDate[2])
        console.log("date", date);
        console.log(newDate.getMonth());
        console.log("newdate", newDate.toLocaleDateString('pt-BR'));
        // let dataFormatada = newDate.toLocaleDateString('pt-BR')
        let dataFormatada = testeDate[2] + '/' + testeDate[1] + '/' + testeDate[0];
        divContent.innerHTML += `<li>dia: ${dataFormatada} ${element.name}</li > `
    });

}

feriados();