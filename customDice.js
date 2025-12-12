let list=[];


let number=document.querySelector(".input-bar");
let createButton=document.querySelector(".create-button");
let theDiv=document.querySelector(".js-div");
let changeX=document.querySelector(".changeX");

//---------------------------------------------------------------------------
createButton.onclick=pushToList;
number.onkeydown=keydownfun;
//----------------------------------------------------------------------------
function pushToList(){
  changeX.innerText=number.value;
  list=[];
  for(let i=1; i<=number.value;i++){
    list.push(i);
  }
  number.value=''
  lastfunction();
}

function keydownfun(event){
  if(event.key==='Enter'){
    pushToList();
  }
}


function roll(){
  let x=Math.floor(Math.random()*list.length);
  document.querySelector(".result").innerHTML=list[x];
}


function lastfunction(){
theDiv.innerHTML=`<span class="result" ></span> <button onclick="roll();" class="rollButton">Roll</button>`
}

