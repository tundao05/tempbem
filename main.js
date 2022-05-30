let toggle = document.querySelector('#header .toggle-button')
let collapse = document.querySelectorAll('#header .collapse')

toggle.addEventListener('click', function () {
  collapse.forEach(col => col.classList.toggle('collapse-toggle'))
})

//with masonry
new Masonry('#posts .grid', {
  itemSelector: '.grid-item',
  gutter: 20
})

//Swiper library
new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  autoplay: {
    delay: 3000
  },
  //responsive breakpoints
  breakpoint: {
    '@0': {
      slidesPerView: 2
    },
    //888px
    '@1.00': {
      slidesPerView: 3
    },
    //1110px
    '@1.25': {
      slidesPerView: 4
    },
    //1330px
    '@1.50': {
      slidesPerView: 5
    }
  }
})

//Sticky Navigation
window.onscroll = function () {
  myFunction()
}

//Get the current value
let navbar = document.getElementById('header')

//Get the navbar position
let sticky = navbar.offsetTop

//Sticky function
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
}
