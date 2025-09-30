{/* <div id="card-1">
        <img src="Assets/img/img1.jpg" alt="Imagen de producto 1" width="356px" height="200px">
        <h3>Título descriptivo</h3>
        <p>Breve descripcion del producto mostrado arriba</p>
</div> */}

window.addEventListener("load", function(event){
    let productDiv =document.createElement("div");
    productDiv.id="card-1";
    productDiv.innerHTML=`
    <img src="Assets/img/img1.jpg" alt="Imagen de producto 1" width="356px" height="200px">
    <h3>Título descriptivo</h3>
    <p>Breve descripcion del producto mostrado arriba</p>
    `;

    document.body.appendChild(productDiv);
    //document.body.insertAdjacentElement("afterbegin",productDiv); otra forma de insertarlo
});


