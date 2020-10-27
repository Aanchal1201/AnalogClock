let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let time = document.getElementById("show");
let ap = " AM";

setInterval(()=>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let HR = 30*h + m/2;
    let MR = 6*m;
    let SR = 6*s;

    hour.style.transform = `rotate(${HR}deg)`;
    minute.style.transform = `rotate(${MR}deg)`;
    second.style.transform = `rotate(${SR}deg)`;

    ap = h>=12?" PM":" AM";
    h = h%12;
    h = h?h:12;//when clock at 12
    h = ("0"+h).slice(-2);//h<10?"0"+h:h
    m = ("0"+m).slice(-2);//m<10?"0"+m:m
    s = ("0"+s).slice(-2);//s<10?"0"+s:s
    time.innerHTML = String(h)+":"+ String(m) + ":"+String(s)+String(ap);   
},1000);
