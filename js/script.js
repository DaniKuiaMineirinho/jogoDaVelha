let x = document.querySelector(".x");
let o = document.querySelector(".o");
let caixas = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container");
let menssagemContainer = document.querySelector("#menssagem");
let menssagemTexto = document.querySelector("#menssagem p");
let iniciar;

//coontador de jogadas
let jog1 = 0;
let jog2 = 0;

//click aos boxes
for (let i = 0; i < caixas.length; i++) {
  caixas[i].addEventListener("click", function () {
    let el = checkEl(jog1, jog2);
    //verifica se tem x ou o
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);
      //computa jogada
      if (jog1 == jog2) {
        jog1++;
      } else {
        jog2++;
      }
      //Checar quem venceu
      checkWin();
    }
  });
}
//evento para iniciar

buttons[0].addEventListener("click", function(){
iniciar= this.getAttribute("id")
buttons[0].style.display= 'none';
setTimeout(function(){
let container=document.querySelector("#container");
container.classList.remove("hide");
}),3000;
});
    
// passa a vez
function checkEl(jog1, jog2) {
  if (jog1 == jog2) {
    //x
    el = x;
  } else {
    //o
    el = o;
  }
  return el;
}

function checkWin() {
  let b1 = document.getElementById("block1");
  let b2 = document.getElementById("block2");
  let b3 = document.getElementById("block3");
  let b4 = document.getElementById("block4");
  let b5 = document.getElementById("block5");
  let b6 = document.getElementById("block6");
  let b7 = document.getElementById("block7");
  let b8 = document.getElementById("block8");
  let b9 = document.getElementById("block9");
  //  Horizontal
  if ( b1.childNodes.length > 0 &&b2.childNodes.length > 0 &&b3.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
        Winner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
        Winner("o");
  }
  }

  if ( b4.childNodes.length > 0 && b5.childNodes.length > 0 &&  b6.childNodes.length > 0) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
        Winner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
        Winner("o");
    }
  }
  if ( b7.childNodes.length > 0 && b8.childNodes.length > 0 &&b9.childNodes.length > 0) {

    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
        Winner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
        Winner("o");
    }
  }
 //Vertical
 if ( b1.childNodes.length > 0 &&b4.childNodes.length > 0 &&b7.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
        Winner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
        Winner("o");
    }
  }

  if ( b2.childNodes.length > 0 && b5.childNodes.length > 0 &&  b8.childNodes.length > 0) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
        Winner("x");
    } else if (b8Child == "o" && b5Child == "o" && b2Child == "o") {
        Winner("o");
    }
  }
  if ( b3.childNodes.length > 0 && b6.childNodes.length > 0 &&b9.childNodes.length > 0) {

    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
        Winner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
        Winner("o");
    }
  }
  //Diagonal
  if ( b1.childNodes.length > 0 && b5.childNodes.length > 0 &&b9.childNodes.length > 0) {

    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
        Winner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
        Winner("o");
    }
  }

  if ( b3.childNodes.length > 0 && b5.childNodes.length > 0 &&b7.childNodes.length > 0) {

    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
        Winner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
        Winner("o");
    }
  }
  //deu velha
  let counter=0;
  for(let i=0;i< caixas.length;i++){
    if(caixas[i].childNodes[0]!=undefined){
        counter++;
    }
    }
    if(counter==9){
        console.log("deu velha")
    }
}

// limpar o  jogo e declarar o vencedor
function Winner(winner){
    let scorex= document.querySelector("#score-1");
    let scoreo= document.querySelector("#score-2");
    let msg =" ";
    if (winner=="x"){
        scorex.textContent= parseInt(scorex.textContent) + 1 ;
        msg="O jogador 1 Venceu!";
    }else  if(winner=="o"){
        scoreo.textContent= parseInt(scoreo.textContent)+1;
        msg="O jogador 2 Venceu!";
    }else{
        msg="Deu velha!";
    }

    //Exibe a Mensagem
    menssagemTexto.innerHTML= msg;
    menssagemContainer.classList.remove("hide");
    
    //Esconde a Mensagem
    setTimeout(function(){
        menssagemContainer.classList.add("hide")
    },3000);

    //zera as jogadas
    jog1=0;
    jog2=0;

    //Remove x e o
    let removerox = document.querySelectorAll(".box div")

    for(let i =0;i<removerox.length;i++){
        removerox[i].parentNode.removeChild(removerox[i])
    }
}

