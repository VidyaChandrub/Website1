
  document.addEventListener('DOMContentLoaded', function () {
    let multipleCardCarousel = document.querySelector("#carouselExampleControls");


    if (window.matchMedia("(min-width: 768px)").matches) {
      let carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false, // Disable automatic sliding
        wrap: false, // Prevent wrapping at the end
      });


      let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
      let cardWidth = document.querySelector(".carousel-item").offsetWidth;
      let scrollPosition = 0;


      document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });


      document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    } else {
      multipleCardCarousel.classList.add("slide");
    }
  });

  
  // document.addEventListener('DOMContentLoaded', function () {
  //   let multipleCardCarousel = document.querySelector("#carouselExampleControls1");


  //   if (window.matchMedia("(min-width: 768px)").matches) {
  //     let carousel = new bootstrap.Carousel(multipleCardCarousel, {
  //       interval: false, // Disable automatic sliding
  //       wrap: false, // Prevent wrapping at the end
  //     });


  //     let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
  //     let cardWidth = document.querySelector(".carousel-item").offsetWidth;
  //     let scrollPosition = 0;


  //     document.querySelector("#carouselExampleControls1 .carousel-control-next").addEventListener("click", function () {
  //       if (scrollPosition < carouselWidth - cardWidth * 4) {
  //         scrollPosition += cardWidth;
  //         document.querySelector("#carouselExampleControls1 .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
  //       }
  //     });


  //     document.querySelector("#carouselExampleControls1 .carousel-control-prev").addEventListener("click", function () {
  //       if (scrollPosition > 0) {
  //         scrollPosition -= cardWidth;
  //         document.querySelector("#carouselExampleControls1 .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
  //       }
  //     });
  //   } else {
  //     multipleCardCarousel.classList.add("slide");
  //   }
  // });


  let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
