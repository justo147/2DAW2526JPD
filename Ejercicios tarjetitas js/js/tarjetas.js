let arrayTitulo=new Array();
let arrayDescripcion=new Array();
arrayTitulo.push("El Susurro del Amanecer","Geometría Urbana","Huellas en la Arena del Tiempo");
arrayDescripcion.push(
    "La niebla matutina se entrelaza entre los troncos de un bosque de pinos, mientras los primeros rayos de sol se cuelan como hilos de oro, creando una atmósfera de paz y misterio."
    ,"Un juego de ángulos y perspectivas en el corazón de la ciudad, donde las líneas rectas de un rascacielos de cristal contrastan con la textura envejecida de un edificio histórico, capturando la esencia dual de la arquitectura moderna."
    ," La silueta solitaria de un viajero camina por una duna infinita al atardecer, con sus huellas siendo el único testimonio de su paso efímero frente a la inmensidad del desierto."
);


window.addEventListener("load", function(event){
    let numerosImagenes = parseInt(prompt("Escribe el numero de imagenes que quieres"));
    
    let contenedor = document.createElement("div");
    contenedor.className = "cards-contenedor";
    
    for(let i = 1; i <= numerosImagenes; i++) {
        let productDiv = document.createElement("div");
        productDiv.id=i;
        productDiv.className = "card"; 
        productDiv.innerHTML = `
            <img src="Assets/img/img${i}.jpg" alt="Imagen de producto ${i}">
            <h3>${arrayTitulo[i-1]}</h3>
            <p>${arrayDescripcion[i-1]}</p>
        `;
        
        contenedor.appendChild(productDiv);
    }
    
    document.body.appendChild(contenedor);
});



