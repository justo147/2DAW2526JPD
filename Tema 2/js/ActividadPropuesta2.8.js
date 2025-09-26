let nombre=prompt("escribe tu nombre")
let edad=parseInt(prompt("escribe tu edad"))
let franja
if(edad<12){
    franja="niño"
}else if(edad>12 || edad<17){
    franja="adolencente"
}else if(edad >17 || edad<64){
    franja="trabajador"
}else{
    franja="jubilado"
}
document.write(nombre+" tiene "+edad+" años y por lo tanto es "+franja)