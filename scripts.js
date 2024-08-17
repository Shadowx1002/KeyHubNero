document.getElementById("sign-in-btn").addEventListener("click", function() {
    alert("Redirecting to Steam sign in...");
});

document.getElementById("help-btn").addEventListener("click", function() {
    alert("Redirecting to Steam help page...");
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});