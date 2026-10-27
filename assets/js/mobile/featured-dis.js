const fetchFeaturedDiscount = async ()=> {
        let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
        let res = await data.json();
        console.log(res);
        let featuredDis = res.featuredDiscount?.map((elem)=>{
            return `

                <div class="swiper-slide">
                  <a href="#" class="fth-links">
                    <div class="fth-banner">
                      <img
                        src=${
                            elem.img
                        }
                        alt=${elem.alt}
                      />
                    </div>
                    <div class="fth-title-off-price">
                      <p class="fth-title">
                        ${elem.title}
                      </p>
                      <p class="fth-price">${elem.price}</p>
                    </div>
                  </a>
                </div>

            `;
        });
        document.querySelector(".mbl-discover .discover-mobile .featured-discount .swiper-wrapper").insertAdjacentHTML("afterbegin",featuredDis.join(""));
        
        var swiper = new Swiper(".featuredSwiper", {
        slidesPerView: 1.2,
        spaceBetween: 40,
      });
}


export default fetchFeaturedDiscount