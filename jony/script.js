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
    fade: { titulo: 'Fade + Estructura', descripcion: 'Degradado moderno con técnica de precisión. Incluye lavado y peinado.', imagen: 'https://d375139ucebi94.cloudfront.net/region2/es/115858/service_photos/71b846437b6341168f189e29ddc8baa8.jpeg' },
    tijera: { titulo: 'Corte a Tijera', descripcion: 'Corte artesanal realizado íntegramente con tijera.', imagen: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=800' },
    peloBarba: { titulo: 'Pelo + Barba', descripcion: 'Servicio completo de corte y barba.', imagen: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800' },
    soloNumero: { titulo: 'Corte a un solo número', descripcion: 'Rapado uniforme con máquina.', imagen: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800' },
    mechas: { titulo: 'Mechas', descripcion: 'Iluminación personalizada con tratamiento.', imagen: 'https://d375139ucebi94.cloudfront.net/region2/es/115858/service_photos/cc4c288fc57a422e8ee287f214e833dd.jpeg' },
    afeitadoClasico: { titulo: 'Afeitado Clásico', descripcion: 'Toalla caliente y navaja.', imagen: 'https://images.unsplash.com/photo-1512690196236-d5a743f1f4dd?q=80&w=800' },
    afeitadoMaquina: { titulo: 'Afeitado con Máquina', descripcion: 'Afeitado rápido.', imagen: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800' },
    recorteBarba: { titulo: 'Recorte de Barba', descripcion: 'Perfilado y mantenimiento.', imagen: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800' },
    corteColor: { titulo: 'Corte + Color', descripcion: 'Asesoramiento y aplicación profesional.', imagen: 'https://d375139ucebi94.cloudfront.net/region2/es/115858/service_photos/70f5df0068a145079135710007069b7b.jpeg' },
    fadeDiseno: { titulo: 'Fade + Diseño', descripcion: 'Degradado con diseños creativos.', imagen: 'https://d375139ucebi94.cloudfront.net/region2/es/115858/inspiration/1778175f6e6a453187e7657fe266f9.jpeg' }
};

function abrirDetalle(tipo) {
    const modal = document.getElementById('modalServicio');
    const body = document.getElementById('modalBody');
    const data = infoServicios[tipo];
    if (!modal || !body || !data) return;

    body.innerHTML = `
        <img src="${data.imagen}" class="modal-img">
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
