var n = document.querySelectorAll('td');
var bn = 0;
for(let i = 0;i < n.length;i++){
    n[i].addEventListener('click',start);
}

function start(){
    this.innerHTML="x";
    this.className ="x";
    checkWin();
    this.removeEventListener('click',start);
   if(bn < 4){
    do{
    var o = Math.floor((Math.random() * 9));
    }while(n[o].className !== "blank");
    n[o].innerHTML="o";
    n[o].className ="o";
    checkWin();
    n[o].removeEventListener('click',start);
    bn++;
   }
}
function checkWin(){
    if(n[0].className === "x" &&
      n[1].className === "x" &&
      n[2].className === "x"
    ) { alert("Win"); 
    location.reload();}
    else if (
      n[3].className === "x" &&
      n[4].className === "x" &&
      n[5].className === "x"
    ) { alert("Win"); 
    location.reload()}
     else if (
      n[6].className === "x" &&
      n[7].className === "x" &&
      n[8].className === "x"
    ) { alert("Win"); 
    location.reload()}
  
    if(n[0].className === "x" &&
      n[3].className === "x" &&
      n[6].className === "x"
    ) { alert("Win"); 
    location.reload()}
    else if (
      n[1].className === "x" &&
      n[4].className === "x" &&
      n[7].className === "x"
    ) { alert("Win"); 
    location.reload()}
     else if (
      n[2].className === "x" &&
      n[5].className === "x" &&
      n[8].className === "x"
    ) { alert("Win"); 
    location.reload()}

    if(n[0].className === "x" &&
      n[4].className === "x" &&
      n[8].className === "x"
    ) { alert("Win"); 
    location.reload()}
    else if (
      n[2].className === "x" &&
      n[4].className === "x" &&
      n[6].className === "x"
    ) { alert("Win"); 
    location.reload()}
     
  }

 

