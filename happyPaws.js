/*-------------------------------SLIDER HOME---------------------------*/

const slides = document.querySelector('.slides');

const caja_bullets = document.querySelectorAll('.bullet');

let indiceActual = 0;



function mostrarSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    caja_bullets.forEach(bullet => bullet.classList.remove('active'));
    caja_bullets[index].classList.add('active');
}


caja_bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        indiceActual = bullet.getAttribute('posicion_slide');
        mostrarSlide(indiceActual);
    });
});


function nextSlide() {
    indiceActual = (indiceActual + 1) % caja_bullets.length;
    mostrarSlide(indiceActual);
}
setInterval(nextSlide, 3000);

/*-------------------------------CONTADOR OUR STATS---------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stats h4');
    const speed = 200; // Ajusta la velocidad del conteo

    // Función para iniciar el conteo
    const startCounting = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / speed;

        const animate = () => {
            if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(animate);
            } else {
                counter.textContent = target;
            }
        };
        animate();
    };

    // Configuración del Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('h4');
                counters.forEach(counter => {
                    // Reiniciar el texto a 0 antes de volver a contar
                    counter.textContent = '0';
                    startCounting(counter);
                });
            }
        });
    }, { threshold: 0.5 }); // 0.5 significa que el 50% de la sección debe estar visible

    // Observar la sección "stats"
    const statsSection = document.querySelector('.stats');
    observer.observe(statsSection);
});

/*-------------------------------SLIDER CLIENTS ---------------------------*/

const slidesClients = document.querySelector('.slidesClients');

const caja_circulos_clients = document.querySelectorAll('.circulo');

let indiceActual_clients = 0;



function mostrarSlide_clients(index) {
    slidesClients.style.transform = `translateX(-${index * 100}%)`;
    caja_circulos_clients.forEach(circulo => circulo.classList.remove('active'));
    caja_circulos_clients[index].classList.add('active');
}


caja_circulos_clients.forEach(circulo => {
    circulo.addEventListener('click', () => {
        indiceActual_clients = circulo.getAttribute('posicion_slide');
        mostrarSlide_clients(indiceActual_clients);
    });
});


function nextSlide_clients() {
    indiceActual_clients = (indiceActual_clients + 1) % caja_circulos_clients.length;
    mostrarSlide_clients(indiceActual_clients);
}
setInterval(nextSlide_clients, 3000);

/*-------------------------------SLIDER THE MONTHS OFFERS ---------------------------*/

const slidesOffers = document.querySelector('.slidesOffers');

const caja_circulos_offers = document.querySelectorAll('.circuloOffers');

let indiceActual_offers = 0;


function mostrarSlide_offers(index) {
    slidesOffers.style.transform = `translateX(-${index * 100}%)`;
    caja_circulos_offers.forEach(circuloOffers => circuloOffers.classList.remove('active'));
    caja_circulos_offers[index].classList.add('active');
}


caja_circulos_offers.forEach(circuloOffers => {
    circuloOffers.addEventListener('click', () => {
        indiceActual_offers = circuloOffers.getAttribute('posicion_slide');
        mostrarSlide_offers(indiceActual_offers);
    });
});


function nextSlide_offers() {
    indiceActual_offers = (indiceActual_offers + 1) % caja_circulos_offers.length;
    mostrarSlide_offers(indiceActual_offers);
}
setInterval(nextSlide_offers, 3000);