// 1. INICIALIZAR ANIMACIONES
AOS.init({
    duration: 1000,
    once: true
});

// 2. LÓGICA DEL MODAL DE SERVICIOS (Tu código)
const infoServicios = {
    'fade': {
        titulo: 'Fade + Estructura',
        descripcion: 'Degradado moderno con técnica de precisión. Incluye lavado y peinado.',
        imagen: 'https://d375139ucebi94.cloudfront.net/region2/es/115858/service_photos/71b846437b6341168f189e29ddc8baa8.jpeg'
    },
    'tijera': {
        titulo: 'Corte a Tijera',
        descripcion: 'Corte artesanal realizado íntegramente con tijera para un acabado natural.',
        imagen: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=800'
    },
    'peloBarba': {
        titulo: 'Pelo + Barba',
        descripcion: 'Servicio completo de corte y arreglo de barba con perfilado.',
        imagen: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800'
    },
    'soloNumero': {
        titulo: 'Corte a un solo número',
        descripcion: 'Rapado uniforme en toda la cabeza con máquina para máxima comodidad.',
        imagen: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800'
    },
    'mechas': {
        titulo: 'Mechas',
        descripcion: 'Técnica de iluminación personalizada para aportar dimensión y contraste a tu cabello. Incluye matización y tratamiento protector de alta gama.',
        imagen: 'https://d375139ucebi94.cloudfront.net/region2/es/115858/service_photos/cc4c288fc57a422e8ee287f214e833dd.jpeg'
    },
    'afeitadoClasico': {
        titulo: 'Afeitado Clásico',
        descripcion: 'Experiencia tradicional con toalla caliente, espuma de brocha y navaja.',
        imagen: 'https://images.unsplash.com/photo-1512690196236-d5a743f1f4dd?q=80&w=800'
    },
    'afeitadoMaquina': {
        titulo: 'Afeitado con Máquina',
        descripcion: 'Afeitado rápido y apurado utilizando máquina shaver de última generación.',
        imagen: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800'
    },
    'recorteBarba': {
        titulo: 'Recorte de Barba',
        descripcion: 'Mantenimiento y forma de tu barba para un aspecto cuidado.',
        imagen: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800'
    },
    'corteColor': {
        titulo: 'Corte + Color',
        descripcion: 'Transformación total. Incluye asesoramiento de color, aplicación técnica profesional y corte adaptado para resaltar el nuevo tono. ¡Atrévete con el cambio!',
        imagen: 'https://d375139ucebi94.cloudfront.net/region2/es/115858/service_photos/70f5df0068a145079135710007069b7b.jpeg'
    },
    'fadeDiseno': {
        titulo: 'Fade + Diseño',
        descripcion: 'Degradado de alta precisión combinado con diseños creativos y líneas definidas a navaja. Un corte con personalidad propia.',
        imagen: 'https://d375139ucebi94.cloudfront.net/region2/es/115858/inspiration/1778175f6e6a453187e7657fe266f9-jonys-barber-inspiration-37c981073ddf4d1893bf5c4c777600-booksy.jpeg'
    }
};

let scrollPosition = 0;

function abrirDetalle(tipo) {
    const modal = document.getElementById('modalServicio');
    const body = document.getElementById('modalBody');
    const data = infoServicios[tipo];

    // Contenido dinámico
    body.innerHTML = `
        <img src="${data.imagen}" alt="${data.titulo}" class="modal-img">
        <h2>${data.titulo}</h2>
        <p>${data.descripcion}</p>
        <a href="https://link.booksy.com/jonysbarber" class="btn-reserva-card" target="_blank">RESERVAR ESTE SERVICIO</a>
    `;

    // Mostrar modal
    modal.style.display = 'flex';

    // Bloquear scroll del fondo (PC y móviles)
    document.body.classList.add('modal-open');
}

function cerrarModal() {
    const modal = document.getElementById('modalServicio');

    // Ocultar modal
    modal.style.display = 'none';

    // Desbloquear scroll del fondo
    document.body.classList.remove('modal-open');
}

// Cerrar modal al hacer click en la X
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', cerrarModal);
});

// Cerrar modal al hacer click fuera del contenido
const modal = document.getElementById('modalServicio');
modal.addEventListener('click', function(e) {
    if (e.target === modal) cerrarModal();
});





let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.review-slide');
    
    // Quitar clase activa actual
    slides[currentSlide].classList.remove('active');
    
    // Calcular nueva posición
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    // Añadir clase activa a la nueva
    slides[currentSlide].classList.add('active');
}


// Opcional: Cambio automático cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);

window.addEventListener('scroll', function() {
    const btnFlotante = document.getElementById('booksy-floating');
    
    // Si el usuario baja más de 300px, muestra el botón. Si vuelve arriba, lo oculta.
    if (window.scrollY > 500) {
        btnFlotante.classList.remove('hidden');
    } else {
        btnFlotante.classList.add('hidden');
    }
});

// 3. CAMBIO DE HEADER AL HACER SCROLL
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

});

particlesJS("particles-js", {
    "particles": {
      "number": { "value": 150, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" }, // Dorado
      "shape": { "type": "circle" },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.1, "sync": false }
      },
      "size": { "value": 2, "random": true },
      "line_linked": { "enable": false }, // Quitamos las líneas para que sea más limpio
      "move": {
        "enable": true,
        "speed": 0.8, // Movimiento muy lento, casi estático
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "bubble" } // Las motas crecen un poco al pasar el ratón
      },
      "modes": {
        "bubble": { "distance": 200, "size": 4, "duration": 2, "opacity": 0.8 }
      }
    }
  });

  // Esperamos a que todo el contenido cargue
document.addEventListener('DOMContentLoaded', () => {
    const unlockBtn = document.getElementById('unlock-btn');
    const welcomeScreen = document.getElementById('welcome-screen');

    if (unlockBtn) {
        unlockBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Evita cualquier comportamiento por defecto
            
            // Añadimos la clase para animar la salida
            welcomeScreen.classList.add('screen-unlocked');
            
            // Habilitamos el scroll en el cuerpo de la web
            document.body.style.overflow = 'visible';
            document.body.style.height = 'auto';

            setTimeout(() => {
                welcomeScreen.style.display = 'none';
            }, 2000); // Ahora esperamos 2000ms (2 segundos) para que termine la animación suave

            // Opcional: Eliminar el elemento del mapa después de la animación para ahorrar memoria
            setTimeout(() => {
                welcomeScreen.style.display = 'none';
            }, 1000); 
        });
    }
});

const gallery = document.querySelector('.swiper'); // Asegúrate de que esta sea la clase de tu swiper
gallery.addEventListener('contextmenu', e => e.preventDefault());



// Haz que toda la pantalla de bienvenida sea el botón
document.getElementById('welcome-screen').addEventListener('click', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.classList.add('screen-unlocked');
    
    setTimeout(() => {
        document.body.style.overflowY = 'auto';
    }, 2000);
});
// Al cargar la página, forzamos el scroll arriba del todo
// El "setTimeout" es para asegurar que el navegador ya haya renderizado la página
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// Dentro de tu evento de clic del botón de entrar:
unlockBtn.addEventListener('click', () => {
    // 1. Subimos la página arriba del todo por si acaso
    window.scrollTo(0, 0);
    
    // 2. Activamos la animación del telón
    welcomeScreen.classList.add('screen-unlocked');
    
    setTimeout(() => {
        document.body.style.overflowY = 'auto';
        document.body.style.overflowX = 'hidden';
        document.body.style.height = 'auto';
    }, 2000); 

    setTimeout(() => {
        welcomeScreen.style.display = 'none';
    }, 2600); 
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    
    // Configuraciones de carga total para evitar vacíos
    loopedSlides: 10,
    loopAdditionalSlides: 10,
    watchSlidesProgress: true,

    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },

    // ACTIVAMOS LAS FLECHAS
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // ACTIVAMOS LA PAGINACIÓN
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Permite saltar a una foto clicando el punto
    },

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('nav a');

// Abrir/Cerrar menú
mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Cambia el icono de barras a una X
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar menú automáticamente al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

/* ============================================================
   CONTROL DE VÍDEO SOCIAL
   ============================================================ */

// 1. Función para Play/Pausa
function togglePlay() {
    const video = document.getElementById('videoSocial');
    if (!video) return;
    
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// 2. Función para el Volumen
function toggleMute(event) {
    if (event) event.stopPropagation(); // Evita pausar al tocar el botón
    const video = document.getElementById('videoSocial');
    const volBtn = document.getElementById('volBtn');
    
    if (!video || !volBtn) return;

    if (video.muted) {
        video.muted = false;
        video.volume = 0.5;
        volBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        video.muted = true;
        volBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}



// 3. Forzar el inicio al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('videoSocial');
    if (video) {
        video.play().catch(() => {
            console.log("Esperando interacción para reproducir...");
        });
    }
});





// Forzamos que no haya scroll al principio
document.body.style.overflow = 'hidden';
document.body.style.height = '100vh';




