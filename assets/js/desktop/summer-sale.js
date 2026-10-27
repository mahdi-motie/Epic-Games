const fetchSummerSale = async ()=> {
        let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
        let res = await data.json();
        console.log(res);
        let summerSale = res.summerSale?.map((elem)=>{
            return `

                <div class="swiper-slide">
                <div class="card-main" style="width: 20vw">
                  <div class="card-body">
                    <div class="card-1">
                      <div class="img">
                        <img
                          src=${elem.img}
                          alt=${elem.alt}
                        />
                      </div>
                      <div class="title">
                        <p>${elem.title}</p>
                        <div class="price">${elem.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-main" style="width: 20vw">
                  <div class="card-body">
                    <div class="card-1">
                      <div class="img">
                        <img
                          src=${elem.img2}
                          alt=${elem.alt}
                        />
                      </div>
                      <div class="title">
                        <p>${elem.title2}</p>
                        <div class="price">${elem.price2}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-main" style="width: 20vw">
                  <div class="card-body">
                    <div class="card-1">
                      <div class="img">
                        <img
                          src=${elem.img3}
                          alt=${elem.alt}
                        />
                      </div>
                      <div class="title">
                        <p>${elem.title3}</p>
                        <div class="price">${elem.price3}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            `;
        });
        document.querySelector(".Home-Desktop .Summer-Sale .swiper-wrapper").insertAdjacentHTML("afterbegin",summerSale.join(""));
        
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


export default fetchSummerSale