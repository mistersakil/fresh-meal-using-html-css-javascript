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
