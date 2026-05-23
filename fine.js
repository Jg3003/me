const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const text = document.querySelector('#hdjs');
        if (entry.isIntersecting) {
            text.classList.add('change-color');
        } else {
            text.classList.remove('change-color');
        }
    });
}, {threshold: 0.5});
observer.observe(cube);

document.addEventListener('DOMContentLoaded', () => {
    const megaToggle = document.getElementById('mega-toggle');
    const megan = document.querySelector('.megan');
    const dropdown = document.querySelector('.dropdown');
    document.addEventListener('click', (event) => {
        const clickedInsideMenu =
            megan.contains(event.target) ||
            dropdown.contains(event.target);
        if (!clickedInsideMenu) {
            megaToggle.checked = false;
        }
    });
});