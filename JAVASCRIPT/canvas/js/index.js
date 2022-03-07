var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

// circle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// context
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);

// draw image
var img = document.getElementById("scream");
ctx.drawImage(img, 10, 10, 277, 240);