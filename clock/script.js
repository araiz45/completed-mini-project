
setInterval(function(){
    let date = new Date();
    // console.log(date);
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    // console.log(h, m, s);
    let time = document.getElementById("time");
    time.innerHTML = h +":"+ m + ":" + s;

    
},1000)