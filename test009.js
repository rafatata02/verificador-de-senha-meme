var pro = prompt("poderia me informar sua senha?")
var se = document.getElementById("txt")
var caixa = document.getElementById("num")
var div = document.getElementById("divv")
var se2 = document.getElementById("txt2")
var caixa2 = document.getElementById("senha2")
var div2 = document.getElementById("divv2")
var fina = document.getElementById("final")


function veri() {
    if ((caixa.value) === pro || (caixa.value) === "senha do adm") {
    div.innerHTML = `OK 1/2`
    div.style.color = 'green'
    div.style.fontSize = "20px"
}
 else {
    div.innerHTML = `<strong>Senha incorreta</strong>` 
    div.style.color = 'red'
    div.style.fontSize = "40px"
}
}
function veri2() {
    if ((caixa2.value) === pro || (caixa2.value) === "senha do adm") {
    div2.innerText = `OK 2/2`
    div2.style.color = 'green'
    div2.style.fontSize = "20px"
}
 else {
    div2.innerHTML = `<strong>Senha incorreta</strong>`
    div2.style.color = 'red'
    div2.style.fontSize = "40px"
}
}
function final() {
if ((caixa.value) === pro && ((caixa2.value) === pro) || (caixa.value) === "senha do adm" && (caixa2.value) === "senha do adm" ) {
   
    fina.innerHTML = `<a href="https://youtu.be/T3WtZn2fppk">parabéns clique aq para ser redirecionado para seus dados</a>`
    
} else {
    fina.innerHTML = "senha errada"
}
}