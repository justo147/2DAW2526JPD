// main.js - Typography Palette Generator

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos todos los inputs de color
  const colorBg = document.getElementById('color-bg');
  const colorFg = document.getElementById('color-fg');
  const colorPrimary = document.getElementById('color-primary');
  
  // Función para actualizar las variables CSS y los estilos de la vista previa
  function updateCSSVariables() {
    // Obtenemos el elemento raíz (:root) para actualizar las variables CSS globales
    const root = document.documentElement;
    
    // Actualizamos las variables CSS globales (estas afectan a toda la página)
    root.style.setProperty('--color-bg', colorBg.value);
    root.style.setProperty('--color-fg', colorFg.value);
    root.style.setProperty('--color-primary', colorPrimary.value);
    
    // Seleccionamos la tarjeta de vista previa
    const previewCard = document.querySelector('.preview-card');
    if (previewCard) {
      // Aplicamos el color de fondo directamente a la tarjeta
      previewCard.style.backgroundColor = colorBg.value;
      // Aplicamos el color de texto general
      previewCard.style.color = colorFg.value;
    }
    
    // Seleccionamos todos los títulos dentro de la vista previa (h1, h2, h3)
    const previewTitles = document.querySelectorAll('.preview-card h1, .preview-card h2, .preview-card h3');
    previewTitles.forEach(title => {
      // Aplicamos el color de texto a cada título
      title.style.color = colorFg.value;
    });
    
    // Seleccionamos todos los párrafos de la vista previa
    const previewParagraphs = document.querySelectorAll('.preview-card p');
    previewParagraphs.forEach(p => {
      // Aplicamos el color de texto a cada párrafo
      p.style.color = colorFg.value;
    });
    
    // Seleccionamos todos los enlaces de la vista previa
    const previewLinks = document.querySelectorAll('.preview-card a');
    previewLinks.forEach(link => {
      // Aplicamos el color primario a cada enlace
      link.style.color = colorPrimary.value;
    });
    
    // Seleccionamos todos los botones de la vista previa
    const previewButtons = document.querySelectorAll('.preview-card .button');
    previewButtons.forEach(button => {
      // Aplicamos el color primario como fondo del botón
      button.style.backgroundColor = colorPrimary.value;
    });
  }
  
  // Añadimos listeners a los inputs de color
  // El evento 'input' se dispara cada vez que el usuario cambia el color
  colorBg.addEventListener('input', updateCSSVariables);
  colorFg.addEventListener('input', updateCSSVariables);
  colorPrimary.addEventListener('input', updateCSSVariables);
  
  // Inicializamos aplicando los valores actuales al cargar la página
  updateCSSVariables();
});