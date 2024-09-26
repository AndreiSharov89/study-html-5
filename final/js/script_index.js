(function () {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        const currentYearElement = document.getElementById('currentYear');
        
        if (currentYearElement) { 
            currentYearElement.textContent = new Date().getFullYear();
        } else {
            console.warn('Current year element not found');
        }

        function updateClock() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const hourDegrees = ((hours % 12) + minutes / 60) * 30; 
            const minuteDegrees = (minutes + seconds / 60) * 6; 
            const secondDegrees = seconds * 6; 

            const hourHand = document.getElementById('hour');
            const minuteHand = document.getElementById('minute');
            const secondHand = document.getElementById('second');

            
            if (hourHand) {
                hourHand.setAttribute('transform', `rotate(${hourDegrees} 100 100)`);
            } else {
                console.warn('Hour hand not found');
            }

            if (minuteHand) {
                minuteHand.setAttribute('transform', `rotate(${minuteDegrees} 100 100)`);
            } else {
                console.warn('Minute hand not found');
            }

            if (secondHand) {
                secondHand.setAttribute('transform', `rotate(${secondDegrees} 100 100)`);
            } else {
                console.warn('Second hand not found');
            }

            setTimeout(updateClock, 1000);
        }

        updateClock(); 
    });
})();
