
window.onload=function() {
    console.log("test");

    // TODO : draw()
    draw();
}

// pt desene canvas
function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) 
    {
        const ctx = canvas.getContext("2d");
       
        ///////////////// DREPTUNGHI - (x, y, width, height)

        // deseneaza un dreptunghi plin
        ctx.fillStyle = "white";
        ctx.fillRect(25, 25, 100, 100);
        
        // șterge zona dreptunghiulră, făcând-o transparentă
        ctx.clearRect(45, 45, 60, 60);

        // deseneaza un contur de dreptunghi
        ctx.strokeStyle = "pink";
        ctx.lineWidth = 10;
        ctx.strokeRect(50, 50, 50, 50);


        ///////////////// PATH 
        ctx.beginPath();
        ctx.moveTo(275, 50);
        ctx.lineTo(200, 75);
        ctx.lineTo(200, 25);
        ctx.lineTo(275, 50);
        ctx.fillStyle = "grey";
        ctx.strokeStyle = "grey";
        ctx.fill();

        // ctx.strokeStyle = "pink";
        // ctx.lineWidth = 10;
        // ctx.stroke();
        
        
        ///////////////// CERC 
        var x = 200;                  // x coordonate centru
        var y = 200;                  // y coordonate centru
        var radius = 50;              // arc radius
        var startAngle = 0;           // starting point on circle
        var endAngle = 2 * Math.PI;   // end point on circle
        
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = "white";
        ctx.fill();
        
        
        ///////////////// TEXT
        ctx.font = "48px serif";
        ctx.fillStyle = "red";
        ctx.fillText("Hakuna Matata!", 100, 300);



        // metode de event-uri pt desene
        canvas.addEventListener("click", function(event) {
            // Obțineți coordonatele cursorului la momentul clicului
            var rect = canvas.getBoundingClientRect();
            var mouseX = event.clientX - rect.left;
            var mouseY = event.clientY - rect.top;

            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.lineTo(130, 10);
            ctx.lineTo(130, 280);
            ctx.lineTo(50, 245);
            ctx.closePath();
        
            if (ctx.isPointInPath(mouseX, mouseY)) {
                console.log("Clic pe poligon!");
            }
        });
    }
}          

// cmd in folderul unde lucrezi
// pornire server : python3 -m http.server
// http://localhost:8000

