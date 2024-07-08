document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.nav-link');

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        links.forEach(function (link) {
          link.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });

  // Smooth scroll with offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const isMobile = window.innerWidth <= 768; 

        if (target) {
            let offset = 0;
            if (!isMobile) {
                const navbarHeight = document.querySelector('.custom-navbar').offsetHeight; 
                offset = navbarHeight;
            }

            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}

const navbarLinks = document.querySelectorAll('nav ul li a');

function updateNavbar() {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const threshold = scrollPosition + (viewportHeight * 3) / 4;

  navbarLinks.forEach(link => {
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (threshold >= sectionTop && threshold < sectionBottom) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

updateNavbar();

window.addEventListener('scroll', updateNavbar);


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Stop observing the element after adding the 'show' class
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
