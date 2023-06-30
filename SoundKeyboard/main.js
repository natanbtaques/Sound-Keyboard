// faz uma busca no documento todo com o queryselectorall pela classe telca
const buttonsList = document.querySelectorAll(".tecla");

let i = 0;

function tocaSom(audioId) {
  //chama a ação de tocar o audio
  document.querySelector(audioId).play();
}

for (let i = 0; i <= buttonsList.length; i++) {
  //Representação da tecla
  const tecla = buttonsList[i];
  //representação do instrumento
  const TagInstrumento = tecla.classList[1];
  //Acesso ao id de cada instrumento
  const audioTag = `#som_${TagInstrumento}`;
  //console.log(TagInstrumento);
  tecla.onclick = function () {
    tocaSom(audioTag);
  };

  tecla.onkeydown = function (evento) {
    console.log(evento);
    if (evento.code === "Space" || evento.code === "Enter") {
      buttonsList[i].classList.add("ativa");
    }
  };

  tecla.onkeyup = function (evento) {
    console.log(evento);
    if (evento.code === "Space" || evento.code === "Enter") {
      buttonsList[i].classList.remove("ativa");
    }
  };
}
