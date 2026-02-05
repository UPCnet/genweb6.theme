/*  INICIO skip_to_content.js */
/*  Mejora la funcionalidad del enlace "Skip to Content" para accesibilidad */

(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        const skipLink = document.querySelector('.skip-to-content');
        
        if (!skipLink) {
            return;
        }
        
        skipLink.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Prevent default scroll behavior
                e.preventDefault();
                
                // Add tabindex if not present to make element focusable
                if (!targetElement.hasAttribute('tabindex')) {
                    targetElement.setAttribute('tabindex', '-1');
                }
                
                // Focus the target element
                targetElement.focus();
                
                // Scroll to the element
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Remove tabindex after focus to restore normal tab flow
                // (only if we added it)
                targetElement.addEventListener('blur', function() {
                    if (targetElement.getAttribute('tabindex') === '-1') {
                        targetElement.removeAttribute('tabindex');
                    }
                }, { once: true });
            }
        });
    });
})();

/*  FIN skip_to_content.js */
