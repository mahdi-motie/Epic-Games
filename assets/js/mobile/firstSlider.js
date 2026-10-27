const fetchSliderOne = async ()=> {
        let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
        let res = await data.json();
        console.log(res);
        let sliderOne = res.firstSlider?.map((elem)=>{
            return `

                <div class="swiper-slide">
                <div class="slider-front-title">
                  <img
                    src=${elem.img}
                    alt=${elem.alt}
                  />
                  <p class="front-mini-title">
                    ${elem.title}
                  </p>
                  <p class="front-title">
                    ${elem.describtion}
                  </p>
                </div>
                <div class="slider-back-title">
                  <img
                    src=${elem.img2}
                    alt=${elem.alt}
                    class="sliders-1"
                  />
                </div>
              </div>

            `;
        });
        document.querySelector(".mbl-discover .discover-mobile .discover-first-slider .swiper-wrapper").insertAdjacentHTML("afterbegin",sliderOne.join(""));
        
        var swiper = new Swiper(".firstSlider", {
        slidesPerView: 1,
        spaceBetween: 20,
        rewind: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          340: {
            slidesPerView: 1.2,
            spaceBetween: 0,
          }, 
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
            loop: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
}


export default fetchSliderOne