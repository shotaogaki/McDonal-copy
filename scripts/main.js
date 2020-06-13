document.addEventListener("DOMContentLoaded",function(){
const mm = new mobileMenu();

const slidein = new mobileMenuSlideIn();

const mmo = new mobileMenuObserver();

const s = new search();

const hero = new heroSlider(".swiper-container");
});

class mobileMenu{
  constructor(){
    this.btn = document.querySelector(".mobile-menu-icon");
    this._init();
  }

  _init(){
    this.btn.addEventListener("click",function(){
      document.querySelector("body").classList.toggle("menu-open");
      document.querySelector("#container").classList.toggle("outview");
      if(document.querySelector(".header-search").classList.contains("inview")){
        document.querySelector(".header-search").classList.toggle("inview");
      }
    })
  }
}

class mobileMenuSlideIn{
  constructor(){
    this._init();
  }

  _init(){
    return $(function(){
      $(".mobile-menu-icon").on("click", function() {
          $(".mobile-menu").slideToggle(); 
          $(".mobile-menu").toggleClass("inview"); 
      });
    });
  }
}

class mobileMenuObserver{
  constructor(){
    this.mmo = new ResizeObserver(this._cb.bind(this))
    this.target=document.querySelector("body");
    this.mmo.observe(this.target);
  }

  _cb(){
    if(window.innerWidth >= 760 && this.target.classList.contains("menu-open")){
      this.target.classList.toggle("menu-open");
      document.querySelector("#container").classList.toggle("outview");
      $(".mobile-menu").slideToggle(); 
      $(".mobile-menu").removeClass("inview"); 
    }
  } 
}

class search{
  constructor(){
    this.btn = document.querySelector(".header-searchicon");
    this._init();
  }

  _init(){
    this.btn.addEventListener("click",function(){
      document.querySelector(".header-search").classList.toggle("inview");
      if(document.querySelector("body").classList.contains("menu-open")){
        document.querySelector("body").classList.toggle("menu-open");
        document.querySelector("#container").classList.toggle("outview");
        $(".mobile-menu").slideToggle(); 
        $(".mobile-menu").removeClass("inview"); 
      }
  })
  }
}

class heroSlider{
  constructor(el){
    this.el = el;
    this.swiper = this._init();
  }

  _init(){
    return new Swiper (this.el, {
      loop: true,
      centeredSlides:true,
      slidesPerView:1,
      speed:1000,
      grabCursor:true,
      breakpoints:{
        1024:{
          slidesPerView:2,
        }
      },
      autoplay:{
        delay:4000,
        disableOnInteraction:false,
      },
      pagination: {
        el: '.swiper-pagination',
      }
    });
  }
}