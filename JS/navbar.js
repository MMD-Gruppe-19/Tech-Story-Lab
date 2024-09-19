function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
    // Find alle links i navigationen
    const navLinks = document.querySelectorAll("#navbar ul ul a");

    // Find den aktuelle URL
    const currentUrl = window.location.href;

    // Opdater href for hvert link og tilføj 'active' klasse til den aktuelle
    navLinks.forEach(link => {
        const category = link.textContent.trim(); // Hent tekstindhold og fjern evt. whitespace
        link.href = `listeview.html?kategori=${encodeURIComponent(category)}`;

        // Tilføj 'active' klasse hvis linkets href matcher den aktuelle URL
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});