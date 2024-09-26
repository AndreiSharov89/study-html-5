(function () {
    'use strict';
    function toggleSpoiler() {
        const spoilerContent = document.querySelector('.spoiler-content');
        if (spoilerContent) { 
            if (spoilerContent.style.display === 'none' || spoilerContent.style.display === '') {
                spoilerContent.style.display = 'block';
            } else {
                spoilerContent.style.display = 'none';
            }
        } else {
            console.warn('Spoiler content not found');
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const currentYearElement = document.getElementById('currentYear');
        
        if (currentYearElement) { 
            currentYearElement.textContent = new Date().getFullYear();
        } else {
            console.warn('Current year element not found');
        }

        
        window.toggleSpoiler = toggleSpoiler;
    });
})();
