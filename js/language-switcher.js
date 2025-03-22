// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get language links
    const languageLinks = document.querySelectorAll('.language-selector a');
    
    // Add event listeners to language links
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle if not already on the active language
            if (!this.classList.contains('active')) {
                // Navigation is handled by the href attribute
                // No need to prevent default
            }
        });
    });
    
    // Function to detect user's browser language
    function detectUserLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        return userLang.substring(0, 2).toLowerCase();
    }
    
    // Check if this is the first visit (no language preference stored)
    if (!localStorage.getItem('preferredLanguage')) {
        const userLang = detectUserLanguage();
        
        // If user's language is German and they're on the English page, suggest German
        if (userLang === 'de' && document.documentElement.lang === 'en') {
            const switchToGerman = confirm('Diese Website ist auch auf Deutsch verfügbar. Möchten Sie zur deutschen Version wechseln?');
            if (switchToGerman) {
                window.location.href = 'index-de.html';
            }
        }
        
        // Store preference
        localStorage.setItem('preferredLanguage', document.documentElement.lang);
    }
});
