//declaração de variaveis 
var nome = "professor";
var sobrenome = "aviar rodrigues"

console.log("nome ", nome);
console.log('sobrenome', sobrenome);


function exibirNomeLog() {
  console.log("exibir nome: " + nome);

}


function exibirNomeCompleto() {
  
  console.log("Nome completo:", nome + " " + sobrenome);
  
}

function eventOnclick() {
  alert("voce clicou no botão")
}
exibirNomeCompleto();
exibirNomeLog()