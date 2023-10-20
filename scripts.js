// JavaScript for Image Gallery
const thumbnails = document.querySelectorAll('.thumbnail');
const largeImage = document.querySelector('.large-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        largeImage.src = thumbnail.src;
    });
});

// JavaScript for Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');

    if (nameField.value === '') {
        alert('Please enter your name.');
        event.preventDefault();
    }

    if (emailField.value === '' || !emailField.value.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

// Additional JavaScript functionality can be added to this file as needed
