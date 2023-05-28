
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function addBila(event)
{
    var name = event.key;

    var culoare = "white";
    if (name == 'r')
    {
        culoare = "red";
    }
    else if (name == 'g')
    {
        culoare = "green";
    }
    else if (name == 'y')
    {
        culoare = "yellow";
    }
    else if (name == 'b')
    {
        culoare = "blue";
    }
    
    if (culoare == "white")
    {
        return;
    }

    var size = document.getElementById("size").value;
    console.log(size);

    var bila = document.createElement("div");
    bila.style.backgroundColor = culoare;
    bila.style.height = size + "px";
    bila.style.width = size + "px";
    bila.style.borderRadius = "50%";
    bila.style.position = "absolute";
    bila.style.top = getRandomInt(0, screen.height) + "px";
    bila.style.left = getRandomInt(0, screen.width) + "px";

    var curent = Number(localStorage.getItem("nr-bile"));
    localStorage.setItem("nr-bile", curent + 1);
    document.getElementById("nr-bile").textContent = localStorage.getItem("nr-bile");

    bila.addEventListener("click", function(event) {
        console.log("click");
        addBilaClick(event);
    });

    document.body.appendChild(bila);
}

function addBilaClick()
{
    culoare = event.target.style.backgroundColor;

    var size = document.getElementById("size").value;
    console.log(size);

    var bila = document.createElement("div");
    bila.style.backgroundColor = culoare;
    bila.style.height = size + "px";
    bila.style.width = size + "px";
    bila.style.borderRadius = "50%";
    bila.style.position = "absolute";
    bila.style.top = getRandomInt(0, screen.height) + "px";
    bila.style.left = getRandomInt(0, screen.width) + "px";

    var curent = Number(localStorage.getItem("nr-bile"));
    localStorage.setItem("nr-bile", curent + 1);
    document.getElementById("nr-bile").textContent = localStorage.getItem("nr-bile");

    bila.addEventListener("click", function(event) {
        console.log("click");
        addBilaClick(event);
    });

    document.body.appendChild(bila);
}

window.onload=function() {
    console.log("test");

    if (localStorage.getItem("nr-bile"))
    {
        document.getElementById("nr-bile").textContent = localStorage.getItem("nr-bile");
    }
    else
    {
        localStorage.setItem("nr-bile", 0);
    }

    document.addEventListener('keydown', addBila, false); 
}


