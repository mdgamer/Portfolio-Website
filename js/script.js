/* ============================================ typing animation =========================================== */

var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","SQL Developer","Full Stack Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

const navActiveSwitcher =  document.querySelectorAll('.nav a');

navActiveSwitcher.forEach(link => {
    link.addEventListener('click', function () {
      // Remove the 'active' class from all links
      navActiveSwitcher.forEach(link => link.classList.remove('active'));
      
      // Add the 'active' class to the clicked link
      this.classList.add('active');
    });
  });

