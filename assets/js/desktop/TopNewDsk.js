const fetchTopNewDsk = async ()=> {
        let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
        let res = await data.json();
        console.log(res);
        let TopNewDsk = res.TopNewRe?.map((elem)=>{
            return `

                <div class="swiper-slide">
                  <a href="#">
                    <img
                      class="card-img"
                      src=${elem.img}
                      alt=""
                    />
                    <p class="description">Base Game</p>
                    <p class="title">${elem.title}</p>
                    <p class="price">${elem.price}</p>
                  </a>
                </div>

            `;
        });
        document.querySelector(".Home-Desktop .top-new-realeses .bottom-cards .swiper-wrapper").insertAdjacentHTML("afterbegin",TopNewDsk.join(""));
        
        var swiper = new Swiper(".topNewSwiper", {
        slidesPerView: 6,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}


export default fetchTopNewDsk