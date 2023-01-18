const navbar = document.querySelector(".navbar");
navbar.querySelector(".toggle").addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});
window.addEventListener("scroll", e => {
  let windowY = window.pageYOffset;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
document.querySelectorAll('.skills').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const scrollTarget = document.getElementById('skill-block');
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset + 350;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.abount').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const scrollTarget = document.getElementById('block-abount');
      const topOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset + 480;
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
document.querySelectorAll('.portfolio').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const scrollTarget = document.getElementById('block-portfolio');
      const topOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset + 520;
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
document.querySelectorAll('.contact').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const scrollTarget = document.getElementById('block-contact');
      const topOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset + 520;
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

























