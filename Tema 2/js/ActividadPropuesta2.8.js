let nombre=prompt("escribe tu nombre");
let edad=parseInt(prompt("escribe tu edad"));
let rango;
if(edad<=12){
    rango="niño";
}else if(edad>12 && edad<=17){
    rango="adolencente";
}else if(edad >17 && edad<=64){
    rango="trabajador";
}else{
    rango="jubilado";
}
document.write(nombre+" tiene "+edad+" años y por lo tanto es "+rango);