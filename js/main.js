window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hidden faq anwser
const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq)=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }else {
            icon.className = 'uil uil-plus'
        }
    })
})

// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 100,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoint: {
        600: {
            slidesPerView: 4
        }
    }
  });