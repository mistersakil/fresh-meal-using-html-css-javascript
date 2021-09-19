/* Navbar toggle with hamburger menu */
const hamburger = document.querySelector(".hamburger .icon");
const navbar = document.querySelector("#navbar");
const goToTopBtn = document.querySelector("#goToTop");

hamburger.onclick = function (event) {
  event.preventDefault();
  console.log("clicked");
  this.classList.toggle("fa-times");
  if (this.classList.contains("fa-times")) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};
/* Navbar toggle with hamburger menu end */

/* Top products swiper slider */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  autoplay: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

/* Top products swiper slider */

/* Deal Parallax */
let deal = document.querySelector(".deals");
window.addEventListener("scroll", function () {
  let _scrollHeight = Math.floor(window.pageYOffset);
  let _viewportHeight = _viewportHeightCalc();
  let _offsetTop = deal.offsetTop;
  _offsetTop -= _viewportHeight;
  if (_scrollHeight >= _offsetTop) {
    let difference = (_scrollHeight - _offsetTop) * 0.1;
    deal.querySelector(
      ".parallax .img"
    ).style.transform = `translateY(-${difference}px)`;
  }
});
function _viewportHeightCalc() {
  let viewportHeight;
  if (window.innerHeight !== undefined) {
    viewportHeight = window.innerHeight;
  } else {
    viewportHeight = document.documentElement.clientHeight;
  }
  return viewportHeight;
}
/* Deal Parallax end */

/* window resize */
window.onresize = function (event) {
  if (screen.width >= 768) {
    hamburger.classList.remove("fa-times");
    navbar.classList.remove("active");
  }
};
/* window resize */

/* window onScroll */
window.onscroll = function (event) {
  let scrollTopPosAfter = 200;
  if (
    document.body.scrollTop > scrollTopPosAfter ||
    document.documentElement.scrollTop > scrollTopPosAfter
  ) {
    goToTopBtn.classList.add("active");
  } else {
    goToTopBtn.classList.remove("active");
  }
};

/* window onScroll end */
/* goToTop */
goToTopBtn.onclick = function (event) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
/* goToTop end */
