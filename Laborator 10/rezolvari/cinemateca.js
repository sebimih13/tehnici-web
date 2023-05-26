
function addItem(item, text)
{
    var newItem = document.createElement("li");
    newItem.textContent = text;
    item.appendChild(newItem);
}

window.onload=function() {
    
    // creează un obiect XMLHttpRequest
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "cinemateca.xml", false);
    httpRequest.send();

    var xmlString = httpRequest.responseText;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
    console.log(xmlDoc);

    var listaFilme = document.getElementById("lista-filme");

    var filme = xmlDoc.getElementsByTagName("film");
    for (var i = 0; i < filme.length; i++) {
        var titlu = filme[i].getElementsByTagName("titlu")[0].childNodes[0].nodeValue;
        
        var itemFilm = document.createElement("li");
        itemFilm.textContent = titlu;

        // adauga restul chestiilor
        var caracteristici = document.createElement("ul");

        var genul = filme[i].getAttribute("genul");
        addItem(caracteristici, genul);
        
        var limba = filme[i].getElementsByTagName("titlu")[0].getAttribute("limba");
        addItem(caracteristici, limba);
        
        var anulLansarii = filme[i].getElementsByTagName("anulLansarii")[0].childNodes[0].nodeValue;
        addItem(caracteristici, anulLansarii);
        
        var regizorul = filme[i].getElementsByTagName("regizorul")[0].childNodes[0].nodeValue;
        addItem(caracteristici, regizorul);
        
        var scenaristul = filme[i].getElementsByTagName("scenaristul")[0].childNodes[0].nodeValue;
        addItem(caracteristici, scenaristul);
        
        var producatorul = filme[i].getElementsByTagName("producatorul")[0].childNodes[0].nodeValue;
        addItem(caracteristici, producatorul);
        
        var actori = filme[i].getElementsByTagName("actori")[0].getElementsByTagName("actor");
        console.log(actori.length);
        console.log(actori);
        for (var j = 0; j < actori.length; j++) {
            var rol = actori[j].getAttribute("rol");
            var actor = actori[j].childNodes[0].nodeValue + " are rol " + rol;
            console.log(actor);
            addItem(caracteristici, actor);
        }
        
        itemFilm.appendChild(caracteristici);
        listaFilme.appendChild(itemFilm);
    }
} 

