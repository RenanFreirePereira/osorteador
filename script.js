let minGlobal, maxGlobal;
let numerosSorteados = [];

function selecionarAcao(acao) {
  // Esconde todas as seções
  document.getElementById("sortearNumero").classList.add("hidden");
  document.getElementById("sortearLista").classList.add("hidden");
  document.getElementById("sortearNovamente").classList.add("hidden");

  // Mostra apenas a seção selecionada
  document.getElementById(acao).classList.remove("hidden");

  // Se a ação for "sortearNovamente", mostra apenas após um sorteio
  if (acao === "sortearNovamente") {
    document.getElementById("sortearNovamente").style.display = "none";
  }
}

function sortearNumero() {
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);
  
  minGlobal = min;
  maxGlobal = max;
  
  var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  numerosSorteados.push(numeroSorteado);
  
  var numeroSorteadoDiv = document.getElementById("numeroSorteado");
  numeroSorteadoDiv.innerText = numeroSorteado;
  numeroSorteadoDiv.classList.add("mostrar");

  // Mostra o botão "Sortear Novamente" após o sorteio
  document.getElementById("sortearNovamenteBtn").classList.remove("hidden");
}

function sortearLista() {
  var lista = document.getElementById("lista").value.split(",");
  var itemSorteado = lista[Math.floor(Math.random() * lista.length)];
  
  var itemSorteadoDiv = document.getElementById("itemSorteado");
  itemSorteadoDiv.innerText = itemSorteado;
  itemSorteadoDiv.classList.add("mostrar");

  // Mostra o botão "Sortear Novamente" após o sorteio
  document.getElementById("sortearNovamenteBtn2").classList.remove("hidden");
}

function sortearNovamente() {
  var repetir = document.getElementById("repetir").checked;
  var resultado = document.getElementById("resultado");
  
  var numeroSorteado;
  do {
    numeroSorteado = Math.floor(Math.random() * (maxGlobal - minGlobal + 1)) + minGlobal;
  } while (!repetir && numerosSorteados.includes(numeroSorteado));

  numerosSorteados.push(numeroSorteado);
  
  if (!repetir) {
    resultado.innerText = numeroSorteado;
  } else {
    resultado.innerText = numeroSorteado;
  }
  resultado.classList.add("mostrar");
  document.getElementById("sortearNovamente").classList.remove("hidden");
  document.getElementById("sortearNovamenteBtn3").classList.add("hidden");
}
