const btn = document.querySelector("#my-button");
btn.addEventListener("click", function (){
    console.log("Clicou no botão!");
}); 


const secondBtn = document.querySelector("#btn"); 

function imprimirMensagem (){
    console.log("Teste"); 
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", ()=> {
    console.log("evento Removido");
    secondBtn.removeEventListener("click",  imprimirMensagem);
});
/**
const title = documet.querySelector("#my-title");
title.addEventListener("click" , (Event)=> {
    console.log(event);
});
*/
const title = document.querySelector("my-title");

title.addEventListener("click", (e) =>{
    console.log(e);
    console.log(e.target);
    console.log(e.offsetX);
    console.log(e.pointerType);
});

const conatinerBtn = document.querySelector("btn-container");
const btnInsideContainer = document.querySelector("#dic-bnt");

conatinerBtn.addEventListener("click", ())

conatinerBtn.addEventListener
