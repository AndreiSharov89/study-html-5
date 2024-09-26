document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    contactForm.addEventListener('submit', function(event) {
        nameError.textContent = '';
        emailError.textContent = '';

        let valid = true;

        const name = document.getElementById('name').value;
        const namePattern = /^[a-zA-Z\s]+$/;
        if (name.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else if (!namePattern.test(name)) {
            nameError.textContent = 'Name must contain only letters and spaces.';
            valid = false;
        }

        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

        const currentYearElement = document.getElementById('currentYear');
        
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        } else {
            console.warn('Current year element not found');
        }
});
