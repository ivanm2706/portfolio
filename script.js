const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const height = sec.offsetHeight;
    const offset = sec.offsetTop - 300;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height - 200) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
      });

      sec.classList.add('show-animate');

      return;
    } 
    
    if (top < offset - 200 || top > offset + height + 300) {
      sec.classList.remove('show-animate');
    }
  })

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  const footer = document.querySelector('footer');

  footer.classList.toggle(
    'show-animate',
    window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1
  );
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})
