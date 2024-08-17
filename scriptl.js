document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        alert('Sign-in successful!');
        
    }
});


document.addEventListener('DOMContentLoaded', function() {
    
    const tooltipElements = document.querySelectorAll('.footer-links a');

    tooltipElements.forEach(function(elem) {
        elem.addEventListener('mouseenter', function() {
            
        });

        elem.addEventListener('mouseleave', function() {
            
        });
    });

    
});
