
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

  const toggler = document.querySelector('.navbar-toggler');
  const navList = document.querySelector('.nav-list');

  toggler.addEventListener('click', () => {
    navList.classList.toggle('open');
  });


function filterReviews() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".review-card");

  cards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}



