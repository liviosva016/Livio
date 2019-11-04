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
        aparecer(resposta.features[i].place_name, i);
    }
}

function nvOl(){
    var armazena = document.createElement('ol');
    armazena.setAttribute('id', 'lista_ordenada');
    document.getElementById('procurar').appendChild(armazena);
}

nvOl();
function aparecer(idAparecer, i){
    var novaLi = document.createElement("li");
    novaLi.setAttribute('id', idAparecer);
        
    var nome = resposta.features[idAparecer];

    var clik = document.createElement('a', 'li');

    clik.setAttribute('onclick', 'mapinha('+idAparecer+')');

    var city = resposta.features[idAparecer].place_name;

    var nvNome = document.createTextNode(city);
    clik.appendChild(nvNome);
    lista_ordenada.appendChild(clik);
    document.getElementById('procurar').appendChild(lista_ordenada);
}

function mapinha(id){
    latitude = resposta.features[id].geometry.coordinates[1];
    longitude = resposta.features[id].geometry.coordinates[0];
    local = resposta.features[id].place_name;
    
var meuMapa = L.map('localizar').setView([latitude, longitude], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2ZsYmVkdWNhdG9yIiwiYSI6ImNrMTZrYm1vNTA1dWEzaGxqN2tmMTZlazcifQ.XXsWkpgiguegb-C7WQpGBA', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(meuMapa);
   
    L.marker([latitude, longitude]).addTo(meuMapa)
        .bindPopup("Localizado: " + local).openPopup();  
   
    L.circle([latitude, longitude], 400, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
})}