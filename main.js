setInterval(()=>{

let d=new Date();
let htime=d.getHours();
let mtime=d.getMinutes();
let stime=d.getSeconds();
let hrotation=30*htime+mtime/2;
let mrotate=6*mtime;
let srotate=8*stime;

hours.style.transform=`rotate(${hrotation}deg)`;
minutes.style.transform=`rotate(${mrotate}deg)`; 
seconds.style.transform=`rotate(${srotate}deg)`;
},1000);