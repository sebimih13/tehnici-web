
window.onload=function() {
    
    draw();

    // Load JSON
    const url = 'poke.json'; 
    var promiseFetch = fetch(url);
    let possanswers;

    promiseFetch.then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.text();
    })
    .then(function(text) {    
            possanswers = JSON.parse(text); 
    })
    .catch(function(err){
            alert(err);
    });   

    // TODO : Foloseste mai departe : possanswers
    document.getElementById("canvas").addEventListener("click", clickCanvas);

    function clickCanvas()
    {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);

        var nume = possanswers[ans].name;
        var img = possanswers[ans].image;
        var level = possanswers[ans].level;
        var ability = possanswers[ans].ability;

        if (sessionStorage.getItem(name) != null)
        {
            console.log(sessionStorage.getItem(name));

            var nr = Number(sessionStorage.getItem(nume));
            sessionStorage.setItem(name, toString(nr + 1));
        }
        else
        {
            sessionStorage.setItem(name, "1");
            console.log(sessionStorage.getItem(name));
        }

        let infodiv = document.getElementById("info");
        infodiv.innerHTML = nume + ", I choose you!" + " (" + sessionStorage.getItem(name) + ")";

        var imgElement = document.getElementById("pokemon");
        imgElement.src = img;

        var levelElement = document.createElement("li");
        levelElement.setAttribute("id", "level");
        levelElement.textContent = "Level: " + level;

        var abilityElement = document.createElement("li");
        abilityElement.setAttribute("id", "ability");
        abilityElement.textContent = "Abilities: " + ability;

        var lastLevelElement = document.getElementById("level");
        if (lastLevelElement)
        {
            lastLevelElement.remove();
        }

        var lastAbilityElement = document.getElementById("ability");
        if (lastAbilityElement)
        {
            lastAbilityElement.remove();
        }

        document.body.appendChild(levelElement);
        document.body.appendChild(abilityElement);
    }
}


// pt desene canvas
function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) 
    {
        const ctx = canvas.getContext("2d");
        
        
        ///////////////// CERC 
        var x = 200;                  // x coordonate centru
        var y = 200;                  // y coordonate centru
        var radius = 100;              // arc radius
        var startAngle = 0;           // starting point on circle
        var endAngle = 2 * Math.PI;   // end point on circle
        
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = "black";
        ctx.fill();


        x = 200;                  // x coordonate centru
        y = 200;                  // y coordonate centru
        radius = 85;              // arc radius
        startAngle = 0;           // starting point on circle
        endAngle = 2 * Math.PI;   // end point on circle

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = "red";
        ctx.fill();


        x = 200;                  // x coordonate centru
        y = 200;                  // y coordonate centru
        radius = 85;              // arc radius
        startAngle = 0;           // starting point on circle
        endAngle = 1 * Math.PI;   // end point on circle

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = "white";
        ctx.fill();

        x = 200;                  // x coordonate centru
        y = 200;                  // y coordonate centru
        radius = 35;              // arc radius
        startAngle = 0;           // starting point on circle
        endAngle = 2 * Math.PI;   // end point on circle

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = "black";
        ctx.fill();


        x = 200;                  // x coordonate centru
        y = 200;                  // y coordonate centru
        radius = 25;              // arc radius
        startAngle = 0;           // starting point on circle
        endAngle = 2 * Math.PI;   // end point on circle

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = "white";
        ctx.fill();


        ///////////////// PATH 
        ctx.beginPath();
        ctx.moveTo(100, 200);
        ctx.lineTo(170, 200);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 200);
        ctx.lineTo(300, 200);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.stroke();
    }
}          


