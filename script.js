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
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 0,
                behavior: 'smooth'
            });
        }
    });
});