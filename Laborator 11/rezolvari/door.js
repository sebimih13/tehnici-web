var culoare = "red";

window.onload = function() {
   draw();
             
   function draw() {
      // desenăm ușa roșie
      const canvas = document.getElementById("canvdoor");
      if (canvas.getContext) {
         const ctx = canvas.getContext("2d");
         
         ctx.fillStyle = "white";
         ctx.fillRect(0, 0, 300, 300);

         ctx.fillStyle = "red";
         ctx.fillRect(25, 25, 150, 220);

         ctx.fillStyle = "white";
         ctx.fillRect(40, 40, 120, 300);
         
         ctx.beginPath();
         ctx.moveTo(45, 45);
         ctx.lineTo(125, 5);
         ctx.lineTo(125, 275);
         ctx.lineTo(50, 245);
         ctx.fillStyle = "white";
         ctx.fill();

         ctx.beginPath();
         ctx.moveTo(50, 50);
         ctx.lineTo(130, 10);
         ctx.lineTo(130, 280);
         ctx.lineTo(50, 245);
         ctx.fillStyle = culoare;
         ctx.fill();

         ctx.beginPath();
         ctx.moveTo(130, 0);
         ctx.lineTo(140, 0);
         ctx.lineTo(140, 240);
         ctx.lineTo(130, 240);
         ctx.fillStyle = "white";
         ctx.fill();

         const x = 110; // x coordinate
         const y = 170; // y coordinate
         const radius = 10; // arc radius
         const startAngle = 0; // starting point on circle
         var endAngle = 2 * Math.PI; // end point on circle
         
         ctx.beginPath();
         ctx.arc(x, y, radius, startAngle, endAngle);
         ctx.fill();

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
               colorBlack();
               console.log("Clic pe poligon!");
            }
         });
      }
   }          
             
   function colorBlack() {
      culoare = "black";
      draw();
   }
}   

