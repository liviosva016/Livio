function pegaCity (){
     return document.getElementById ('cidade').value;
}

function montaLink (){
    var comeco = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

    var recebeCity = pegaCity ();

    var final = '.json?access_token=pk.eyJ1IjoiY2ZsYmVkdWNhdG9yIiwiYSI6ImNrMTZrYm1vNTA1dWEzaGxqN2tmMTZlazcifQ.XXsWkpgiguegb-C7WQpGBA';   
    
    return comeco + recebeCity + final;
}