document.addEventListener('DOMContentLoaded', function () {
    // Detecta l' idioma de <html lang="xx">, per defecte 'ca' si no es troba
    const lang = document.documentElement.lang || 'ca';
  
    // Selecciona tots els elements rellevants
    const elementos = document.querySelectorAll('p, span, div');
  
    elementos.forEach(function (elemento) {
      if (!elemento.hasAttribute('lang')) {
        elemento.setAttribute('lang', lang);
      }
    });
  });
  