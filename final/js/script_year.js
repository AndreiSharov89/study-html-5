(function () {
	'use strict'
    document.addEventListener('DOMContentLoaded', function() {
        const currentYearElement = document.getElementById('currentYear');
        
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        } else {
            console.warn('Current year element not found');
        }
});
})();