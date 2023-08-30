function mostrarMensagem(){
var mensagem = document.getElementById("men").value 
document.getElementById("tex").innerHTML = `Você digitou: ${mensagem}`
}