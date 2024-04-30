let d = new Date();
let time = d.toLocaleTimeString();
let inter = setInterval(function(){ console.log(time);}, 1000);