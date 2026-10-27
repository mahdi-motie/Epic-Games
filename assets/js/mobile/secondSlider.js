const fetchSliderTwo = async ()=> {
        let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
        let res = await data.json();
        console.log(res);
        let secondSlider = res.secondSlider?.map((elem)=>{
            return `

                <div class="swiper-slide">
                    <div class="card2-1">
                      <div class="card-image-smth">
                        <img
                          src=${elem.img}
                          alt=${elem.alt}
                        />
                      </div>
                      <div class="card-title-smth">
                        <p class="main-title">${elem.title}</p>
                        <p class="main-price">${elem.price}</p>
                      </div>
                    </div>
                  </div>

            `;
        });
        document.querySelector(".mbl-discover .discover-mobile .discover-smth-new .swiper-wrapper").insertAdjacentHTML("afterbegin",secondSlider.join(""));
        
        var swiper = new Swiper(".discoverNew", {
        slidesPerView: 1.1,
        grid: {
          rows: 3,
        },
        // rewind: true,
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}


export default fetchSliderTwo