window.onload = function() {
  function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = new Date();
      const sec = now.getSeconds();
      const min = now.getMinutes();
      const hr = now.getHours() % 12;

      var af = "??";
      if (now.getHours() >= 0 && now.getHours() < 12) {
        af = "AM";
      } 
      else {
        af = "PM";
      }


      ctx.font = '60pt digital-clock-font';
      ctx.fillStyle = "red";
      ctx.fillText(hr + ":" + min + ":" + sec + " " + af, 0, 80);
    }

    window.requestAnimationFrame(draw);
  }

  function waitForCSS(callback) {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(callback);
    } 
    else {
      setTimeout(callback, 2000);
    }
  }

  waitForCSS(function() {
    window.requestAnimationFrame(draw);
  });
};

