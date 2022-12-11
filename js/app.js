// Nav Mobile Menu
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, { edge: 'right' });
});

// Scrollspy
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {scrollOffset: 50});
});

// Carousel
document.addEventListener('DOMContentLoaded', function () {
  var heroCarousel = document.querySelector('.carousel.hero');
  var heroInstance = M.Carousel.init(heroCarousel, { fullWidth: true });
  
  var heroContentCarousel = document.querySelector('.carousel.content');
  var heroInstance = M.Carousel.init(heroContentCarousel, { indicators: true, fullWidth: true });

  var elems = document.querySelectorAll('#testimonial .carousel');
  var instances = M.Carousel.init(elems, { indicators: true, fullWidth: true });

  // Autoplay - must select each carousel specifically
  // const el = document.querySelector("#testimonial .carousel.autoplay");
  // const l = M.Carousel.getInstance(el);

  // setInterval(function(){
  //   l.next(1);
  // }, 3000);

  // Autoplay All
  var autos = document.querySelectorAll(".carousel.autoplay");

  autos.forEach(function(el){
    let carousel = M.Carousel.getInstance(el);

    setInterval(function(){
    carousel.next(1);
    }, 4000);
  })



}); // Carousels END

// Parallax
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.parallax');
//   var instances = M.Parallax.init(elems, {});
// });

// Accordion
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});

// set copyright for multiple years
// function getCurrentYear() {
//   let thisYear = new Date().getFullYear()
//   if (thisYear !== 2020) {
//     return ` - ${thisYear.toString().substring(2)}`
//   }
// }
// document.getElementById('currentYear').textContent = getCurrentYear();

// set copyright current year - 11ty has a Shortcode method for this
// document.getElementById('currentYear').textContent = new Date().getFullYear();


// Next button code
// document.querySelector('.clicker').addEventListener('click', function () {
//   const el = document.querySelector(".carousel");
//   const l = M.Carousel.getInstance(el);
//   l.next(1);
// });


// Highlight active link
// const menuItem = document.querySelectorAll('.nav-links a');

// menuItem.forEach(el => {
//   if (el.getAttribute('href') === window.location.pathname) {
//     el.parentNode.classList.add("active")
//   }
// })

// Nav Scroll Color Change
// window.onscroll = () => {
//   const header = document.querySelector('header')
//   const navList = document.querySelector('nav__list')
//   (this.scrollY <= 10) ? header.classList.remove('scroll-bg-clr') : header.classList.add('scroll-bg-clr')
//   (this.scrollY <= 10) ? navList.classList.remove('scroll-clr') : navList.classList.add('scroll-clr')
// }

// Lightbox Modal
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, {});
// });