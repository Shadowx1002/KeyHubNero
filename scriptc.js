document.querySelectorAll('.search-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Search function not implemented.');
    });
});

document.querySelectorAll('.sign-in-btn, .join-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(button.textContent + ' button clicked.');
    });
});
