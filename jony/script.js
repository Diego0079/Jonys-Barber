/* ============================================================
   1. AOS
   ============================================================ */
   AOS.init({
    duration: 1000,
    once: true
});

/* ============================================================
   2. MODAL SERVICIOS
   ============================================================ */
   const infoServicios = {
    fade: { 
        titulo: 'Fade + Estructura', 
        descripcion: 'Degradado moderno con técnica de precisión.', 
        imagen: 'img/fade.webp' 
    },
    tijera: { 
        titulo: 'Corte a Tijera', 
        descripcion: 'Corte realizado íntegramente con tijera.', 
        imagen: null 
    },
    peloBarba: { 
        titulo: 'Pelo + Barba', 
        descripcion: 'Servicio completo de corte y barba.', 
        imagen: null 
    },
    soloNumero: { 
        titulo: 'Corte a un solo número', 
        descripcion: 'Rapado uniforme con máquina.', 
        imagen: null // Aquí no hay foto, se verá fondo negro
    },
    mechas: { 
        titulo: 'Mechas', 
        descripcion: 'Iluminación personalizada con tratamiento.', 
        imagen: 'img/mechas.webp' // Sin foto
    },
    afeitadoClasico: { 
        titulo: 'Afeitado Clásico', 
        descripcion: 'Toalla caliente y navaja.', 
        imagen: null 
    },
    afeitadoMaquina: { 
        titulo: 'Afeitado con Máquina', 
        descripcion: 'Afeitado rápido.', 
        imagen: null
    },
    recorteBarba: { 
        titulo: 'Recorte de Barba', 
        descripcion: 'Perfilado y mantenimiento.', 
        imagen: null // Sin foto
    },
    corteColor: { 
        titulo: 'Corte + Color', 
        descripcion: 'Asesoramiento y aplicación profesional.', 
        imagen: 'img/corte-color.webp' 
    },
    fadeDiseno: { 
        titulo: 'Fade + Diseño', 
        descripcion: 'Degradado con diseños creativos.', 
        imagen: 'img/diseño.webp' // Sin foto
    }
};



function abrirDetalle(tipo) {
    const modal = document.getElementById('modalServicio');
    const body = document.getElementById('modalBody');
    const data = infoServicios[tipo];
    
    // Si algo falla, salimos
    if (!modal || !body || !data) return;

    // --- AQUÍ ESTÁ EL CAMBIO (OPCIÓN 2) ---
    // Si data.imagen tiene algo, úsalo. Si es null o vacío, usa el logo.
    // Asegúrate de que la ruta 'img/logo.webp' sea correcta en tu carpeta.
    const imagenMostrar = data.imagen ? data.imagen : 'img/logo.webp'; 

    body.innerHTML = `
        <img src="${imagenMostrar}" alt="${data.titulo}" class="modal-img">
        <h2>${data.titulo}</h2>
        <p>${data.descripcion}</p>
        <a href="https://link.booksy.com/jonysbarber" class="btn-reserva-card" target="_blank">RESERVAR ESTE SERVICIO</a>
    `;

    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

function cerrarModal() {
    const modal = document.getElementById('modalServicio');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

document.getElementById('modalServicio')?.addEventListener('click', e => {
    if (e.target.id === 'modalServicio') cerrarModal();
});

document.querySelectorAll('.close-modal').forEach(b => b.addEventListener('click', cerrarModal));

/* ============================================================
   3. SLIDER RESEÑAS
   ============================================================ */
let currentSlide = 0;
const slides = document.querySelectorAll('.review-slide');

function changeSlide(dir) {
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + dir + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(() => changeSlide(1), 5000);

/* ============================================================
   4. SCROLL (HEADER + BOTÓN)
   ============================================================ */
const header = document.querySelector('header');
const btnFlotante = document.getElementById('booksy-floating');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header?.classList.toggle('sticky', y > 100);
    btnFlotante?.classList.toggle('hidden', y <= 500);
}, { passive: true });

/* ============================================================
   5. PARTICLES
   ============================================================ */
if (window.particlesJS) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 0.6,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 0.5,
          sync: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
  });
}


/* ============================================================
   6. WELCOME SCREEN (UNIFICADO)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const welcome = document.getElementById('welcome-screen');
    const unlock = document.getElementById('unlock-btn');
    if (!welcome) return;

    const enter = () => {
        window.scrollTo(0, 0);
        welcome.classList.add('screen-unlocked');

        setTimeout(() => {
            document.body.style.overflow = 'visible';
            document.body.style.height = 'auto';
            welcome.style.display = 'none';
        }, 2000);
    };

    unlock?.addEventListener('click', e => {
        e.preventDefault();
        enter();
    });

    welcome.addEventListener('click', () => {
        enter();
    });
});

/* ============================================================
   7. SWIPER
   ============================================================ */
   let swiper;

   if (!swiper) {
       swiper = new Swiper(".mySwiper", {
           effect: "coverflow",
           centeredSlides: true,
           slidesPerView: "auto",
           loop: true,
           speed: 600,
   
           coverflowEffect: {
               rotate: 40,
               depth: 200,
               slideShadows: true,
           },
   
           navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
           },
   
           pagination: {
               el: ".swiper-pagination",
               clickable: true,
           },
   
           autoplay: {
               delay: 3500,
               disableOnInteraction: true,
           },
       });
   }
   


/* ============================================================
   8. MENU MÓVIL
   ============================================================ */
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    icon?.classList.toggle('fa-bars');
    icon?.classList.toggle('fa-times');
});

/* ============================================================
   9. VIDEO SOCIAL
   ============================================================ */
function togglePlay() {
    const v = document.getElementById('videoSocial');
    v?.paused ? v.play() : v.pause();
}

function toggleMute(e) {
    e?.stopPropagation();
    const v = document.getElementById('videoSocial');
    const b = document.getElementById('volBtn');
    if (!v || !b) return;
    v.muted = !v.muted;
    b.innerHTML = v.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
}
