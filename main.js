function detecterSectionEntree() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            } else {
                entry.target.classList.remove('section-visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Ajoute un gestionnaire d'événements à chaque lien de la barre de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const targetId = this.getAttribute('href'); // Récupère l'identifiant de la cible
            const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

            // Récupère la hauteur de la fenêtre et de l'élément cible
            const windowHeight = window.innerHeight;
            const elementHeight = targetElement.offsetHeight;

            // Calcule la position de défilement pour centrer l'élément cible
            const scrollPosition = targetElement.offsetTop - (windowHeight - elementHeight) / 2;

            // Défilement fluide jusqu'à l'élément cible
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const accueilSection = document.getElementById('accueil');
    accueilSection.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-section');

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                // Si la section est à moins de 75% de la hauteur de la fenêtre visible, ajoutez la classe 'visible'
                section.classList.add('visible');
            } else {
                // Sinon, retirez la classe 'visible'
                section.classList.remove('visible');
            }
        });
    });
});

function afficherDetailProjet(idProjet) {
    var modal = document.getElementById('detailProjetModal');
    var titre = document.getElementById('modalTitre');
    var description = document.getElementById('modalDescription');
    var logo = document.getElementById('modalLogo');

    // Définir les détails du projet en fonction de son identifiant
    if (idProjet === 'projet1') {
        titre.innerText = 'Jeu Vidéo';
        description.innerText = "Dans ce projet de jeu vidéo, j'ai implémenté un système de quadtree en 2D pour une gestion optimisée des objets et des collisions. Les effets de particules ajoutent une dimension visuelle captivante, offrant des explosions éclatantes et des animations lumineuses. Les animations en 2D donnent vie à chaque élément du jeu, offrant des mouvements fluides et expressifs. Ensemble, ces éléments créent une expérience immersive et dynamique, transportant les joueurs dans un univers vibrant d'aventure et de magie.";
        logo.src = 'chemin/vers/logo-projet1.png';
    } else if (idProjet === 'projet2') {
        titre.innerText = 'Montage Vidéo';
        description.innerText = "Dans ce projet de montage vidéo sur Filmora 9, j'ai utilisé des fonctionnalités avancées telles que le suivi de mouvement et les effets de transition personnalisés pour créer une narration visuelle captivante.";
        logo.src = 'chemin/vers/logo-projet2.png';
    } else if (idProjet === 'projet3') {
        titre.innerText = 'SQL et Oracle';
        description.innerText = "Dans ce projet de base de données avec Oracle pour des installations électriques, j'ai développé un système de gestion robuste permettant de stocker et d'organiser efficacement des informations vitales telles que les plans, les schémas électriques et les historiques de maintenance.";
        logo.src = 'chemin/vers/logo-projet3.png';
    }

    // Afficher la modal
    modal.style.display = 'block';
}


function fermerDetailProjetModal() {
    var modal = document.getElementById('detailProjetModal');
    modal.style.display = 'none';
}

// Fermer la modal lorsqu'on clique en dehors de celle-ci
window.onclick = function(event) {
    var modal = document.getElementById('detailProjetModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}




