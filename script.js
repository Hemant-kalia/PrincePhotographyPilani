document.getElementById('mobile-menu').addEventListener('click', function () {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active'); // Optional: Add class to nav for styling
});