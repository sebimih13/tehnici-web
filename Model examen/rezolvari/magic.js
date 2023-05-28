
window.onload=function() {
    console.log("test");

    document.getElementById("canvas").addEventListener("click", clickCanvas);

    const url = 'magic.json';    
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

    draw();

    function clickCanvas()
    {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let color = "green";
        if (possanswers[ans].bool == "no")
        {
            color = "red";
        }
        else if (possanswers[ans].bool == "maybe")
        {
            color = "orange";
        }

        console.log(color);

        const canvas = document.getElementById("canvas");
        if (canvas.getContext) 
        {
            const ctx = canvas.getContext("2d");
            var x = 200;                  // x coordonate centru
            var y = 200;                  // y coordonate centru
            var radius = 50;              // arc radius
            var startAngle = 0;           // starting point on circle
            var endAngle = 2 * Math.PI;   // end point on circle
            
            ctx.beginPath();
            ctx.arc(x, y, radius, startAngle, endAngle);
            ctx.fillStyle = color;
            ctx.fill();
        }

        let infodiv = document.getElementById("info");
        infodiv.innerHTML = possanswers[ans].text;
        infodiv.style.color = color;    
    }
}


// pt desene canvas
function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) 
    {
        const ctx = canvas.getContext("2d");
       
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
        radius = 50;              // arc radius
        startAngle = 0;           // starting point on circle
        endAngle = 2 * Math.PI;   // end point on circle
        
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.font = "90px serif";
        ctx.fillStyle = "black";
        ctx.fillText("8", 180, 230);
    }
}          

// cmd in folderul unde lucrezi
// pornire server : python3 -m http.server
// http://localhost:8000

