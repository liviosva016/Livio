function pegaCity (){
     return document.getElementById ('cidade').value;
}

var resposta;

function montaLink (){
    var comeco = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

    var recebeCity = pegaCity ();

    var final = '.json?access_token=pk.eyJ1IjoiY2ZsYmVkdWNhdG9yIiwiYSI6ImNrMTZrYm1vNTA1dWEzaGxqN2tmMTZlazcifQ.XXsWkpgiguegb-C7WQpGBA';   
    
    return comeco + recebeCity + final;
}

function pesquisa(){
var resultado = new XMLHttpRequest();

var linkr = montaLink();

resultado.open('GET', linkr, true);

resultado.onreadystatechange = function (e){
    console.log(this.readyState);
    if (this.readyState == 4) {
        resposta = JSON.parse(this.response);
        console.log(JSON.parse(this.response));
        fFor();
    }
}
resultado.send();
}

function fFor(){
    var corpo = resposta.features.length;

    var i;
    for(i=0; i<corpo; i++){
        aparecer(i);
    }
}

function nvOl(){
    var armazena = document.createElement('ol');
    armazena.setAttribute('id', 'lista_ordenada');
    document.getElementById('procurar').appendChild(armazena);
}

nvOl();
    function aparecer(idAparecer){
        var novaLi = document.createElement("li");
        novaLi.setAttribute('id', idAparecer);
        
        var nome = resposta.features[idAparecer];

        var clik = document.createElement('a');
        clik.setAttribute('onclick', '');

        var city = resposta.features[idAparecer].place_name;

        var nvNome = document.createTextNode(city);
        novaLi.appendChild(nvNome);
        document.getElementById('procurar').appendChild(novaLi);
    }

