value = false; //closed
x = document.getElementById('nav-links');

function toggleNav() {
    if (!value) {
        x.style.display = 'flex';
    } else {
        x.style.display = 'none';
    }
    value = !value;
}