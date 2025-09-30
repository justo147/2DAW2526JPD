{/* <div id="card-1">
        <img src="Assets/img/img1.jpg" alt="Imagen de producto 1" width="356px" height="200px">
        <h3>Título descriptivo</h3>
        <p>Breve descripcion del producto mostrado arriba</p>
</div> */}

window.addEventListener("load", function(event){
    let numerosImagenes = parseInt(this.prompt("Escribe el numero de imagenes que quieres"));
    
    // Crear contenedor principal
    let container = document.createElement("div");
    container.className = "cards-container"; // Esta clase activa el Grid
    
    for(let i = 1; i <= numerosImagenes; i++) {
        let productDiv = document.createElement("div");
        productDiv.className = "card"; // Clase para cada card individual
        productDiv.innerHTML = `
            <img src="Assets/img/img${i}.jpg" alt="Imagen de producto ${i}">
            <h3>Producto ${i}</h3>
            <p>Descripción del producto ${i} con características destacadas</p>
        `;
        
        container.appendChild(productDiv);
    }
    
    document.body.appendChild(container);
});



