
window.onload = function() {
  var starttime = Date.now();
           
  function draw() {
    let nowtime = Date.now();
    // folosiți diferența nowtime - starttime pentru animație 

    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 50;
        var startAngle = 0;
        var endAngle = 2 * Math.PI;
      
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.fillStyle = '#f2d648'; 
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(centerX + 10, centerY - 30, 5, startAngle, endAngle);
        ctx.fillStyle = '#181a1b'; 
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + 100, centerY + 50);
        ctx.lineTo(centerX + 100, centerY - 50);
        ctx.fillStyle = '#181a1b';
        ctx.fill();

        console.log(document.body.style.backgroundColor);
    }
  } 

  draw();
}       

