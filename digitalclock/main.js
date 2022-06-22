// get date and time 

function clock(){
    var hou=document.getElementById('hour');
    var min=document.getElementById('minute');
    var sec=document.getElementById('second');
    var zones=document.getElementById('zone');

    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    
    zone="AM";

    if(h>12){
        h=h-12;
        zone="PM"
    }

    if(h<10){
        h='0'+h
    }

    if(m<10){
        m='0'+m
    }

    if(s<10){
        s='0'+s
    }

    // if(s%2==0){
    //     sec.style.color='rgb(189, 8, 180)';
    // }
    // else{
    //     sec.style.color='rgb(219, 13, 116)';
    // }


    hou.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    zones.innerHTML=zone;
};

//seconds in display

var digitalclock=setInterval(clock,1000);