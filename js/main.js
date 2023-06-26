let sec = document.querySelector(".seconds") , min = document.querySelector(".minutes") , hou = document.querySelector(".hours")  ;
let s = 0 , m=0 , h=0 , c=1 ;
document.querySelector(".start").addEventListener("click",()=>{
function inc()
{
    s += c ;
    sec.innerHTML = (s<10)?'0'+s : s ;

    if(s==60)
    {
    s=0;
    m+=1    
    min.innerHTML = (m<10)?'0'+m : m ;
    sec.innerHTML = "00" ;
    }
    if(m==60)
    {
    s=0;
    m=0;
    h+=1    
    hou.innerHTML = (h<10)?'0'+h : h ;
    sec.innerHTML = "00";
    min.innerHTML = "00";
    }

}
setInterval(inc, 1000);
 document.getElementsByClassName("start")[0].style.display = "none";
 document.getElementsByClassName("pause")[0].style.display = "inline-block";

});

document.querySelector(".pause").addEventListener("click",()=>{
        c=0 ;
        document.getElementsByClassName("pause")[0].style.display = "none";
        document.getElementsByClassName("continue")[0].style.display = "inline-block";
});

document.querySelector(".continue").addEventListener("click",()=>{
    c=1 ;
    document.getElementsByClassName("continue")[0].style.display = "none";
    document.getElementsByClassName("pause")[0].style.display = "inline-block";
});
document.querySelector(".clear").addEventListener("click",()=>{
    window.location = "index.html"; 
});